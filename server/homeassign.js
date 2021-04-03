import mongoose from 'mongoose';

const homeassignSchema = new mongoose.Schema({
    goal1: String,
    goal2: String,
    goal3: String,
    obs: String,
});

const homeassign = mongoose.model('homeassign',homeassignSchema);

export default homeassign;