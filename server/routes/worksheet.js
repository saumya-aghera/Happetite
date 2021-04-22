import express from 'express'

const router = express.Router();
import Worksheet from '../models/worksheet.js';

router.post('/', (req, res) => {
    Worksheet.create(req.body)
      .then(book => res.json(res))
      .catch(err => res.status(400).json({ error: 'Unable to submit' }));
});
  
router.route('/check').get((req, res) => {  

//For checking data present in db
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



export default router;