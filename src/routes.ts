import express from 'express';
import { categoriesController } from './controllers/categoriesController';
import exp from 'constants';

const router = express.Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

export { router }