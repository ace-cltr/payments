import { Router } from "express";
import { handleTransaction } from "../controllers/accountController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

/**
 * @desc Handle account transaction
 * @route POST /api/user/account
 * @access private
 */
router.post("/account", authMiddleware, handleTransaction);

export { router };
