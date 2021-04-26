import mongoose from 'mongoose';

const gifSchema = new mongoose.Schema({
    gif_file: String,
    
});

const gif = mongoose.model('gif',gifSchema);

export default gif;