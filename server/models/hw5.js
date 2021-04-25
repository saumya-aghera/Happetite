import mongoose from 'mongoose';

const h5Schema = new mongoose.Schema({
    str: String,
    userId: String,
    userName: String
});

const hw5 = mongoose.model('hw5',h5Schema);

export default hw5;