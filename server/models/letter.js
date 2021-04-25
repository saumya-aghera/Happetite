import mongoose from 'mongoose';

const LetterSchema = new mongoose.Schema({
    let: String,
    userId: String,
    userName: String
    
});

const letter = mongoose.model('letter',LetterSchema);

export default letter;