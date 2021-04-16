import mongoose from 'mongoose';

const endSchema = new mongoose.Schema({
    fb: String,
});

const end = mongoose.model('end',endSchema);

export default end;