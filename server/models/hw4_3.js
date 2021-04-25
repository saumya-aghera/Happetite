import mongoose from 'mongoose';

const hw4_3Schema = new mongoose.Schema({
    d3_1: String,
    d3_2: String,
    d3_3: String,
    userId: String,
    userName: String
});

const hw4_3 = mongoose.model('hw4_3',hw4_3Schema);

export default hw4_3;