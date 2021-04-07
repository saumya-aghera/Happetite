import express from 'express'

const router = express.Router();
import MindFull from '../models/mindfull.js';

router.post('/', (req, res) => {
    MindFull.create(req.body)
      .then(book => res.json({ msg: 'Exercise Submitted' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
  });

export default router;