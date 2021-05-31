import express from 'express'
import * as carController from './controller'

export const router = express.Router();

router.get('', carController.getCars);
router.get('/:id', carController.getCar);

/*
* Obviously, for operations below we should have Administrator, but time is limited...
* we can check admin access through middleware or OPA
* */

router.post('', carController.createCar);

router.put('/:id', carController.updateCar);

router.delete('/:id', carController.deleteCar);
