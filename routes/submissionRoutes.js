import { submitResponse, getSubmissionHistory } from "../controllers/submissionController.js"
import express from 'express'
const router = express.Router();  
import authUser from "../middleware/authUser.js";


// POST /api/submissions — submit response and get AI feedback
router.post("/feedback", authUser, submitResponse);

// GET /api/submissions/history — get last 5 submissions
router.get("/history", authUser, getSubmissionHistory);

export default router;