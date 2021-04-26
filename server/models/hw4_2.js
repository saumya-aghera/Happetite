import mongoose from 'mongoose';

const hw4_2Schema = new mongoose.Schema({
    d2_1: String,
    d2_2: String,
    d2_3: String,
    userId: String,
    userName: String
});

const hw4_2 = mongoose.model('hw4_2',hw4_2Schema);

export default hw4_2;