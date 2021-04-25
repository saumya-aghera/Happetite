import mongoose from 'mongoose';

const module1Schema = new mongoose.Schema(
    {
        userId: String,
        worksheet1: Boolean,
        hopeBox1: Boolean,
        homeAssignment1: Boolean,

    }
        
);
 
const User = mongoose.model('Module1', module1Schema);

export default User;

