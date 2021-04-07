import mongoose from 'mongoose';

const mindfullSchema = new mongoose.Schema({
    feelings: String
});

const mindfull = mongoose.model('mindfull',mindfullSchema);

export default mindfull;