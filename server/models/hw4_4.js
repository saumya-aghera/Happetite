import mongoose from 'mongoose';

const hw4_4Schema = new mongoose.Schema({
    d4_1: String,
    d4_2: String,
    d4_3: String,
});

const hw4_4 = mongoose.model('hw4_4',hw4_4Schema);

export default hw4_4;