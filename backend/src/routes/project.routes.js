
import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createProjectEnquiry } from "../controllers/project.controller.js";

const router = Router();

const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions. Please try again later.",
  },
});
router.post("/", enquiryLimiter, createProjectEnquiry);

export default router;
