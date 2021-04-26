import mongoose from 'mongoose';

const activity6Schema = new mongoose.Schema({
    writeup: String,
    userId: String,
    userName: String
});

const activity6 = mongoose.model('activity6',activity6Schema);

export default activity6;