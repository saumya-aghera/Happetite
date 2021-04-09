import express from 'express'

const router = express.Router();
import Thankful from '../models/thankful.js';

router.post('/', (req, res) => {
    Thankful.create(req.body)
      .then(book => res.json({ msg: 'Submitted' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
  });

export default router;