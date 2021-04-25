import mongoose from 'mongoose';

const module3Schema = new mongoose.Schema(
    {
         userId: String,
        try3:Boolean,
      homeAssignment3:Boolean,

    }
        
);
 
const User = mongoose.model('Module3', module3Schema);

export default User;