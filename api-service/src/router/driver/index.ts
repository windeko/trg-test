import express from 'express'
import * as driverController from './controller'

export const router = express.Router();

router.get('', driverController.driverGet);

router.post('', driverController.driverCreate);
router.post('/login', driverController.driverLogin);

router.put('/logout', driverController.driverLogout);
router.put('/logoutAll', driverController.driverLogoutAll);
