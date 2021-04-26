import mongoose from 'mongoose';

const module4Schema = new mongoose.Schema(
    {
        userId: String,
         thankful4:Boolean,
        letter4:Boolean,
    homeAssignment4: Boolean,
      hw4_day1:Boolean,
      hw4_day2:Boolean,
      hw4_day3:Boolean,
      hw4_day4:Boolean,
      hw4_day5:Boolean,
      hw4_day6:Boolean,
      hw4_day7:Boolean,

    }
        
);
 
const User = mongoose.model('Module4', module4Schema);

export default User;