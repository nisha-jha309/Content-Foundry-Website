import crypto from "crypto";
import fs from "fs";
import path from "path";

import { Router } from "express";
import rateLimit from "express-rate-limit";

import WhitePaperLead from "../models/WhitePaperLead.js";
import { createWhitePaperLead } from "../controllers/whitePaper.controller.js";

const router = Router();

// ------------------------------------
// Rate limit form submissions
// ------------------------------------
const whitePaperLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

// ------------------------------------
// POST — Submit White Paper Form
// ------------------------------------
router.post(
  "/",
  whitePaperLimiter,
  createWhitePaperLead
);

// ------------------------------------
// GET — Download White Paper PDF
// ------------------------------------
router.get("/download/:token", async (req, res, next) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Invalid download link.",
      });
    }

    // Hash token received from URL.
    const downloadTokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    // Find matching lead whose token hasn't expired.
    const lead = await WhitePaperLead.findOne({
      downloadTokenHash,
      downloadTokenExpiresAt: {
        $gt: new Date(),
      },
    });

    if (!lead) {
      return res.status(404).json({
        success: false,
        message:
          "This download link is invalid or has expired.",
      });
    }

    // PDF location:
    // backend/documents/white-paper.pdf
    const pdfPath = path.resolve(
      process.cwd(),
      "documents",
      "white-paper.pdf"
    );

console.log("PDF DIAGNOSTIC", {
  cwd: process.cwd(),
  routeDir: import.meta.dirname,
  expectedPath: path.resolve(
    process.cwd(),
    "documents",
    "white-paper.pdf"
  ),
  exists: fs.existsSync(
    path.resolve(
      process.cwd(),
      "documents",
      "white-paper.pdf"
    )
  ),
});

    // Make sure PDF exists.
    if (!fs.existsSync(pdfPath)) {
      console.error(
        "White Paper PDF not found:",
        pdfPath
      );

      return res.status(500).json({
        success: false,
        message:
          "White paper is temporarily unavailable.",
      });
    }

    // Record download time.
    lead.downloadedAt = new Date();
    await lead.save();

    // Send PDF as download.
    return res.download(
      pdfPath,
      "Content-Foundry-White-Paper.pdf",
      (error) => {
        if (error) {
          next(error);
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

export default router;