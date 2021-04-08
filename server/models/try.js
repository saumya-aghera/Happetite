import mongoose from 'mongoose';

const trySchema = new mongoose.Schema({
    ta: String,
    tb: String,
    tc: String,
    td: String,
    te: String,

});

const tryy = mongoose.model('tryy',trySchema);

export default tryy;