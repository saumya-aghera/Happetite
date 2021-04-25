import mongoose from 'mongoose';

const module5Schema = new mongoose.Schema(
    {
        userId: String,
        survey5:Boolean,
      strength5:Boolean,
      homeAssignment5:Boolean,

    }
        
);
 
const User = mongoose.model('Module5', module5Schema);

export default User;