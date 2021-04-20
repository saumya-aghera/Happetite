import express from 'express'

const router = express.Router();
import User from '../models/User.js';

//For checking whether user is new or old
router.route('/newold').get((req, res) => {
    console.log(req.query.userId)
  
    User.findOne({userId: req.query.userId }, function (err,data) {
     if (err) {
            return res.status(500).send(err)
     } else {
         console.log('data bhai data',data)
         if (data !== null) {
             
             return res.status(200).json(true)
         }
         else {
             
            return res.status(200).json(false)
         }
            
        }

        console.log('found or not?')
});

});


//for checking in backend
router.route('/check').get((req, res) => {
    
    //for Deleting data
     User.findOneAndRemove({userId: req.query.userId }, function (err,data) {
     if (err) {
            res.status(500).send(error)
     } else {
         console.log(data)
        }
     });
    

//For checking data present in db
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//for getting progess of old user
router.route('/updatedInfo').get((req, res) => {
  
    User.findOne({userId: req.query.userId }, function (err,data) {
     if (err) {
            res.status(500).send(error)
     } else {
         console.log(data)
            res.json(data)
        }
});

});


//For adding new user
router.route('/add').post((req, res) => {
  const userInfo = req.body;
   
    console.log('from post',userInfo)
    const newUser = new User(userInfo);

   
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//For updating user status
router.route('/update').post((req, res) => {

    const newdoc = req.body
    const uid =req.body.userId

    console.log('checkchek',newdoc,uid)

    User.findOneAndReplace({userId: uid }, newdoc,
        null, function (err, docs) {
                                
    if (err){
        console.log(err)
    }
    else{
        console.log(" : ", docs);
    }
});
    

});

export default router;