import Submission from "../models/submission.model.js";
import {generateFeedback} from "../utils/generateFeedback.js";

export const submitResponse = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Text is required." });

    const feedback = await generateFeedback(text);

    const submission = await Submission.create({
      user: req.user._id,
      text,
      feedback,
    });

    res.status(201).json({ message: "Submission saved", submission });
  } catch (error) {
    console.error("Error in submitResponse:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getSubmissionHistory = async (req, res) => {
  try {
    const submissions = await Submission.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({ submissions });
  } catch (error) {
    console.error("Error in getSubmissionHistory:", error);
    res.status(500).json({ message: "Server error" });
  }
};
