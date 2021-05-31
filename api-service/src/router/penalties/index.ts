import express from 'express'
import * as penaltiesController from './controller'
import {isAuthorized} from '../../middleware/auth'

export const router = express.Router();

router.get('', isAuthorized, penaltiesController.penaltiesGetAll);
router.get('/:id', isAuthorized, penaltiesController.penaltiesGetOne);
