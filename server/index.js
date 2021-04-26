import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './routes/User.js';
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
import HW5Routes from './routes/hw5.js';
import StrRoutes from './routes/strength.js';
import ERoutes from './routes/end.js';
import module1 from './routes/module1.js';
import module2 from './routes/module2.js';
import module3 from './routes/module3.js';
import module4 from './routes/module4.js';
import module5 from './routes/module5.js';
import module6 from './routes/module6.js';
import hwModule4 from './routes/hwModule4.js';



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
app.use('/hw5', HW5Routes);
app.use('/strength', StrRoutes);
app.use('/end', ERoutes);
app.use('/users', User);
app.use('/module1', module1);
app.use('/module2', module2);
app.use('/module3', module3);
app.use('/module4', module4);
app.use('/module5', module5);
app.use('/module6', module6);
app.use('/hwModule4', hwModule4);


app.use(bodyParser.json({limit:"20mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:"true"}));

// app.use((cors()));

app.get('/', (req, res) => res.status(200).send("Hello World"));




const CONNECT_URL = 'mongodb+srv://pragya:pb78fFEj4s5QKddN@cluster0.pbcpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection Established on port: ${PORT}`)
)).catch((err) => console.log(err.message));
mongoose.set('useFindAndModify', false)