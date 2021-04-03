import mongoose from 'mongoose';

const hopeboxSchema = new mongoose.Schema({
    list: String,
    file: String
});

const hopebox = mongoose.model('hopebox',hopeboxSchema);

export default hopebox;