import express from 'express'
// import {createhomeassign} from '../controllers/homeassign.js'
// import HomeAssignData from '../models/homeassign.js';
const router = express.Router();
import H3 from '../models/h3.js';
// router.post('/',createhomeassign);
router.post('/', (req, res) => {
    H3.create(req.body)
      .then(book => res.json({ msg: 'Assignment submitted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to sbmit this assignment' }));
  });

export default router;