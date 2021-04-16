import express from 'express'
// import {createhomeassign} from '../controllers/homeassign.js'
// import HomeAssignData from '../models/homeassign.js';
const router = express.Router();
import End from '../models/end.js';
// router.post('/',createhomeassign);
router.post('/', (req, res) => {
    End.create(req.body)
      .then(book => res.json({ msg: 'Assignment submitted successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to sbmit this assignment' }));
  });

export default router;