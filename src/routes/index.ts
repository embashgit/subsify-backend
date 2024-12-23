// src/routes/index.ts

import { Router } from 'express';
import userRoutes from './userRoutes'
const router = Router();

// Combine all routes
router.use(userRoutes);

export default router;
