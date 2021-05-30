import express from 'express'
import * as tripController from './controller'

export const router = express.Router();

router.get('', tripController.getTrips);
router.get('/:id', tripController.getTrip);

router.post('', tripController.createTrip);

router.put('/:id', tripController.updateTrip);
