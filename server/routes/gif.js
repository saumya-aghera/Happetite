import express from 'express'

const router = express.Router();
import GIF from '../models/gif.js';

router.post('/', (req, res) => {
    GIF.create(req.body)
      .then(book => res.json({ msg: 'Box Submitted' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
  });

export default router;