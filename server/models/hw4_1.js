import mongoose from 'mongoose';

const hw4_1Schema = new mongoose.Schema({
    d1_1: String,
    d1_2: String,
    d1_3: String,
    userId: String,
    userName: String
});

const hw4_1 = mongoose.model('hw4_1',hw4_1Schema);

export default hw4_1;