import mongoose from 'mongoose';

const strSchema = new mongoose.Schema({
    str: String,
});

const strength = mongoose.model('strength',strSchema);

export default strength;