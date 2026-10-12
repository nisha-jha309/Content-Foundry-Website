import mongoose from "mongoose";

const whitePaperLeadSchema = new mongoose.Schema(
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
      trim: true,
      default: "",
    },

    emailPermission: {
      type: Boolean,
      default: false,
    },

    // This is automatically set by backend.
    source: {
      type: String,
      default: "Website—Hero White Paper",
    },

    // Hashed version of the download token.
    downloadTokenHash: {
      type: String,
      default: null,
    },

    // Download link expiry.
    downloadTokenExpiresAt: {
      type: Date,
      default: null,
    },

    // Set when PDF is actually downloaded.
    downloadedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const WhitePaperLead = mongoose.model(
  "WhitePaperLead",
  whitePaperLeadSchema
);

export default WhitePaperLead;