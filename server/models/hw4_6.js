import mongoose from 'mongoose';

const hw4_6Schema = new mongoose.Schema({
    d6_1: String,
    d6_2: String,
    d6_3: String,
    userId: String,
    userName: String
});

const hw4_6 = mongoose.model('hw4_6',hw4_6Schema);

export default hw4_6;