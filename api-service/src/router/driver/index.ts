import express from 'express'
import * as driverController from './controller'
import {isAuthorized} from '../../middleware/auth'

export const router = express.Router();

router.get('', isAuthorized, driverController.driverGet);

router.post('', driverController.driverCreate);
router.post('/login', driverController.driverLogin);

router.put('/logout', isAuthorized, driverController.driverLogout);
router.put('/logoutAll', isAuthorized, driverController.driverLogoutAll);
