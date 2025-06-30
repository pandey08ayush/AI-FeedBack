import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateFeedback = async (text) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash", // ✅ use correct model
    });

    const result = await model.generateContent(`Provide constructive feedback on this text:\n"${text}"`);
    const response = result.response;
    return response.text().trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI feedback generation failed.";
  }
};
