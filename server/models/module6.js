import mongoose from 'mongoose';

const module6Schema = new mongoose.Schema(
    {
        userId: String,
         activity6:Boolean,
      feedback6:Boolean

    }
        
);
 
const User = mongoose.model('Module6', module6Schema);

export default User;