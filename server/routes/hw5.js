import express from 'express'
// import {createhomeassign} from '../controllers/homeassign.js'
// import HomeAssignData from '../models/homeassign.js';
const router = express.Router();
import H5 from '../models/hw5.js';
// router.post('/',createhomeassign);
router.post('/', (req, res) => {
    H5.create(req.body)
      .then(book => res.json({ msg: 'Assignment submitted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit this assignment' }));
  });

export default router;