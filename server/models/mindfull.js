import mongoose from 'mongoose';

const mindfullSchema = new mongoose.Schema({
    feelings: String,
    userId: String,
    userName: String
});

const mindfull = mongoose.model('mindfull',mindfullSchema);

export default mindfull;