import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        userId: String,
    
        module1_completed: Boolean,
        module2_completed: Boolean,
        module3_completed: Boolean,
        module4_completed: Boolean,
        module5_completed: Boolean,
        module6_completed: Boolean,
    }
        
);
 
const User = mongoose.model('User', userSchema);

export default User;

