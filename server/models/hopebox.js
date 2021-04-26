import mongoose from 'mongoose';

const hopeboxSchema = new mongoose.Schema({
    list: String,
    file: String,
    userId: String,
    userName: String
});

const hopebox = mongoose.model('hopebox',hopeboxSchema);

export default hopebox;
