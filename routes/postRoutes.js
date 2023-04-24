import express from "express";

import { adminGuard, authGuard } from "../middleware/authMiddleware";
import { createPost, updatePost } from "../controllers/postControllers";


const router = express.Router();


router.post('/', authGuard, adminGuard, createPost);
router.put('/:slug', authGuard, adminGuard, updatePost);




export default router;
