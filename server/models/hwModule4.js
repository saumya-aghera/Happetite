import mongoose from 'mongoose';

const hwModule4Schema = new mongoose.Schema({
    
    userId: String,
    hw4_day1:Boolean,
      hw4_day2:Boolean,
      hw4_day3:Boolean,
      hw4_day4:Boolean,
      hw4_day5:Boolean,
      hw4_day6:Boolean,
      hw4_day7:Boolean,
});

const homeassign = mongoose.model('HWModule4',hwModule4Schema);

export default homeassign;