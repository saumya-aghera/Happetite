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
        worksheet1: Boolean,
        hopeBox1: Boolean,
        homeAssignment1: Boolean,
        mindfulness2: Boolean,
      
        try3: Boolean,
        homeAssignment3: Boolean,
      
        thankful4: Boolean,
        letter4: Boolean,
        homeAssignment4:Boolean,
        hw4_day1: Boolean,
        hw4_day2: Boolean,
        hw4_day3: Boolean,
        hw4_day4: Boolean,
        hw4_day5: Boolean,
        hw4_day6: Boolean,
        hw4_day7: Boolean,
      
        survey5: Boolean,
        strength5: Boolean,
        homeAssignment5: Boolean,
      
        activity6: Boolean,
        feedback6: Boolean
    
    }
        
);
 
const User = mongoose.model('User', userSchema);

export default User;

