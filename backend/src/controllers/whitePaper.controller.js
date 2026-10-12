import crypto from "crypto";

import WhitePaperLead from "../models/WhitePaperLead.js";
import { whitePaperSchema } from "../validators/whitePaper.validator.js";

import {
  sendWhitePaperAdminNotification,
  sendWhitePaperUserEmail,
} from "../services/email.service.js";

export const createWhitePaperLead = async (req, res, next) => {
  try {
    // -----------------------------
    // 1. Validate form data
    // -----------------------------
    const validation = whitePaperSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Please check the submitted form details.",
        errors: validation.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    // -----------------------------
    // 2. Generate secure download token
    // -----------------------------
    const downloadToken = crypto.randomBytes(32).toString("hex");

    const downloadTokenHash = crypto
      .createHash("sha256")
      .update(downloadToken)
      .digest("hex");

    // Token valid for 7 days
    const downloadTokenExpiresAt = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    );

    // -----------------------------
    // 3. Save lead
    // -----------------------------
    const lead = await WhitePaperLead.create({
      ...validation.data,

      // Automatically identify this source.
      source: "Website—Hero White Paper",

      downloadTokenHash,
      downloadTokenExpiresAt,
    });

    // -----------------------------
    // 4. Create download URL
    // -----------------------------
    const publicApiUrl =
      process.env.PUBLIC_API_URL || "http://localhost:5000";

    const downloadUrl =
      `${publicApiUrl}/api/white-paper/download/${downloadToken}`;

    // -----------------------------
    // 5. Send admin notification
    // -----------------------------
    try {
      await sendWhitePaperAdminNotification(lead);
    } catch (emailError) {
      console.error(
        "White Paper admin notification failed:",
        emailError.message
      );
    }

    // -----------------------------
    // 6. Send white paper to user
    // -----------------------------
    try {
      await sendWhitePaperUserEmail({
        lead,
        downloadUrl,
      });
    } catch (emailError) {
      console.error(
        "White Paper user email failed:",
        emailError.message
      );
    }

    // -----------------------------
    // 7. Send success response
    // -----------------------------
    return res.status(201).json({
      success: true,
      message: "Your white paper is ready.",
      data: {
        id: lead._id,
        downloadUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};