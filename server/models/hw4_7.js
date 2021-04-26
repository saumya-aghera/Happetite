import mongoose from 'mongoose';

const hw4_7Schema = new mongoose.Schema({
    d7_1: String,
    d7_2: String,
    d7_3: String,
    userId: String,
    userName: String
});

const hw4_7 = mongoose.model('hw4_7',hw4_7Schema);

export default hw4_7;