import mongoose from 'mongoose';

const h3Schema = new mongoose.Schema({
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    date: Date,
});

const h3 = mongoose.model('h3',h3Schema);

export default h3;