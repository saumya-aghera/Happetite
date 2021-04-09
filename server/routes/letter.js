import express from 'express'
// import {createhomeassign} from '../controllers/homeassign.js'
// import HomeAssignData from '../models/homeassign.js';
const router = express.Router();
import Let from '../models/letter.js';
// router.post('/',createhomeassign);
router.post('/', (req, res) => {
    Let.create(req.body)
      .then(book => res.json({ msg: 'Letter submitted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
  });

export default router;