import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import asyncHandler from "express-async-handler";
import {
  handleQuery,
  signInUser,
  signupUser,
  updateUserInfo,
} from "../controllers/userController.js";

const router = Router();

/**
 * @desc Signup user
 * @route POST /api/user/signup
 * @access public
 */
router.post("/signup", asyncHandler(signupUser));

/**
 * @desc Login user
 * @route POST /api/user/signin
 * @access public
 */
router.post("/signin", asyncHandler(signInUser));

/**
 * @desc Update user info.
 * @route PUT /api/v1/user
 * @access private
 */
router.put("/", authMiddleware, updateUserInfo);

/**
 * @desc Get user info.
 * @route GET /api/v1/user/bulk
 * @access private
 */

// get all user route using query parameters (important)
router.get("/bulk", authMiddleware, asyncHandler(handleQuery));

export { router };
