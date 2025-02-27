import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    description: { type: String, required: false, unique: false },
    title: { type: String, required: true },
    // downloadLink: { type: String, required: true },
    thumbnails: { type: Object, required: true },
    publishedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
