
import mongoose from "mongoose";

const projectEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      enum: ["AI Video", "Brand Films", "Orignal Shoot"],
    },
    message: {
      type: String,
      default: "",
      maxlength: 1000,
      trim: true,
    },
    source: {
      type: String,
      default: "Website - Start a Project",
      immutable: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: "throw",
  }
);

export default mongoose.model(
  "ProjectEnquiry",
  projectEnquirySchema
);
