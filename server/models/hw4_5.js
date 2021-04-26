import mongoose from 'mongoose';

const hw5_1Schema = new mongoose.Schema({
    d5_1: String,
    d5_2: String,
    d5_3: String,
    userId: String,
    userName: String
});

const hw4_5 = mongoose.model('hw4_5',hw5_1Schema);

export default hw4_5;