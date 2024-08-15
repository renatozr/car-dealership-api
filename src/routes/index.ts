import { Router } from 'express';
import carsRoute from './cars';
import motorcyclesRoute from './motorcycles';

const router = Router();

router.use(carsRoute);
router.use(motorcyclesRoute);

export default router;
