import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import HomeAssignRoutes from './routes/homeassign.js';
import HopeBoxRoutes from './routes/hopebox.js';
import WorksheetRoutes from './routes/worksheet.js';
import MindfullRoutes from './routes/mindfull.js';
import H3Routes from './routes/h3.js';
import TryRoutes from './routes/try.js';
import LetRoutes from './routes/letter.js';
import ThankRoutes from './routes/thankful.js';
import HW4_1 from './routes/hw4_1.js';
import HW4_2 from './routes/hw4_2.js';
import HW4_3 from './routes/hw4_3.js';
import HW4_4 from './routes/hw4_4.js';
import HW4_5 from './routes/hw4_5.js';
import HW4_6 from './routes/hw4_6.js';
import HW4_7 from './routes/hw4_7.js';


const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.use('/assign', HomeAssignRoutes);
app.use('/hopebox', HopeBoxRoutes);
app.use('/worksheet', WorksheetRoutes);
app.use('/mindfull', MindfullRoutes);
app.use('/h3', H3Routes);
app.use('/tryy', TryRoutes);
app.use('/letter', LetRoutes);
app.use('/thankful', ThankRoutes);
app.use('/hw4_1', HW4_1);
app.use('/hw4_2', HW4_2);
app.use('/hw4_3', HW4_3);
app.use('/hw4_4', HW4_4);
app.use('/hw4_5', HW4_5);
app.use('/hw4_6', HW4_6);
app.use('/hw4_7', HW4_7);






app.use(bodyParser.json({limit:"20mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:"true"}));

// app.use((cors()));

const CONNECT_URL = 'tmongodb+srv://trial:trial@cluster0.2jmqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection Established on port: ${PORT}`)
)).catch((err) => console.log(err.message));
mongoose.set('useFindAndModify', false)