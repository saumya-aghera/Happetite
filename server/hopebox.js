import express from 'express'

const router = express.Router();
import HopeBox from '../models/hopebox.js';

router.post('/', (req, res) => {
    HopeBox.create(req.body)
      .then(book => res.json({ msg: 'Box Submitted' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
  });

export default router;