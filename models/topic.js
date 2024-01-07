import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
    isCompleted: {
      type: Boolean,
      default: false, // Sets the default value of isCompleted to false
    },
  },
  {
    timestamps: true, // This option creates createdAt and updatedAt fields
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;