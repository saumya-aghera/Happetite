import express from 'express'

const router = express.Router();
import Worksheet from '../models/worksheet.js';

router.post('/', (req, res) => {
    Worksheet.create(req.body)
      .then(book => res.json({ msg: 'Worksheet Submitted' }))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
  });

export default router;