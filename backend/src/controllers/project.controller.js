
import ProjectEnquiry from "../models/ProjectEnquiry.js";
import { sendProjectEnquiryNotification } from "../services/email.service.js";
import { projectEnquirySchema } from "../validators/project.validator.js";

export const createProjectEnquiry = async (req, res, next) => {
  try {
    const validation = projectEnquirySchema.safeParse(req.body);

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

    // Save enquiry in MongoDB first
    const enquiry = await ProjectEnquiry.create(validation.data);

    // Send email notification
    try {
      await sendProjectEnquiryNotification(enquiry);
    } catch (emailError) {
      // Keep the saved enquiry even if email delivery fails
      console.error(
        "Enquiry email notification failed:",
        emailError.message
      );
    }

    // Return success response
    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: {
        id: enquiry._id,
      },
    });
  } catch (error) {
    next(error);
  }
};
