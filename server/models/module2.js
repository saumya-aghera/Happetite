import mongoose from 'mongoose';

const module2Schema = new mongoose.Schema(
    {
        userId: String,
        mindfulness2:Boolean

    }
        
);
 
const User = mongoose.model('Module2', module2Schema);

export default User;