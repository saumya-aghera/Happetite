import mongoose from 'mongoose';

const LetterSchema = new mongoose.Schema({
    let: String,
    
});

const letter = mongoose.model('letter',LetterSchema);

export default letter;