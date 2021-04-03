import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import HomeAssignRoutes from './routes/homeassign.js';
import HopeBoxRoutes from './routes/hopebox.js';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.use('/assign', HomeAssignRoutes);
app.use('/hopebox', HopeBoxRoutes)

app.use(bodyParser.json({limit:"20mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:"true"}));

// app.use((cors()));

const CONNECT_URL = 'mongodb+srv://trial:trial@cluster0.2jmqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection Established on port: ${PORT}`)
)).catch((err) => console.log(err.message));
mongoose.set('useFindAndModify', false)