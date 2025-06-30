import express from "express";
const router = express.Router();  
import {
    registerUser,
    loginUser,
    checkAuth,
    logout
} from '../controllers/userController.js'
import authUser from "../middleware/authUser.js";


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/is-auth", authUser, checkAuth);
router.post("/logout",logout)

export default router;