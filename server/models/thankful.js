import mongoose from 'mongoose';

const thankfulSchema = new mongoose.Schema({
    n1: String,
    n2: String,
    n3: String,
    n4: String,
    n5: String,

});

const thankful = mongoose.model('thankful',thankfulSchema);

export default thankful;