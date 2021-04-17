import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Helplines.css'
import BackHeader from '../BackHeader/BackHeader'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(name, state, contact, cost, time) {
  return { name, state, contact, cost, time };
}

const rows = [
  createData('Sarathi','Assam','104','Toll Free','24x7'),
  createData('Asha Helpline','Chandigarh','+91 172 2735436, +91 172 2735446','Not mentioned','Mon-Sat 8am to 7pm'),
  createData('Arogya Seva: Health Care and Health Counseling Center','Chhattisgarh','104','Toll Free','24x7'),
  createData('Sumaitri','Delhi','+91 011 23389090','Not mentioned','Mon-Fri 2pm to 10pm and Sat-Sun 10am & to 10pm'),
  createData('Snehi','Delhi','+91 011 65978181104','Not mentioned','Daily 2pm to 6pm'),
  createData('Sanjeevani','Delhi','011 24311918, 011 24318883 (Mon-Fri) 26862222, 26864488, 40769002 (Mon-Sat)','Not mentioned','10am to 5.30pm'),
  createData('Fortis Stress Helpline','Delhi','+918376804102','Toll Free','24x7'),
  createData('COOJ Mental Health Foundation','Goa','+91 8322252525, +91 98225 62522','Not mentioned','Weekdays: 3pm to 7pm'),
  createData('Saath','Ahmedabad, Gujarat','+91 79 26305544 , +91 79 26300222','Not mentioned','Daily: 1pm to 7pm'),
  createData('Jeevan Aastha helpline','Gandhinagar, Gujarat','1800 233 3330','Toll Free','24x7'),
  createData('Kashmir Lifeline','Srinagar, J&K','1800 180 7020','Not mentioned','Sun-Thurs: 10am to 5pm'),
  createData('The Sara','Jammu Tawi, J&K','+91-9697-606060','Not mentioned','Daily: 10am to 5pm'),
  createData('Chikitsa Salah: Health Information Helpline','Jharkhand','104','Toll Free','24x7'),
  createData('Jeevan Suicide Prevention Helpline','Jamsshedpur, Jharkhand','+91 0657 6453841,+91 0657 6555555','Not mentioned','Daily: 10am to 6pm'),
  createData('Parivarthan Counseling Helpline Services','Bangaluru, Karnataka','+91 7676 602 602','Not mentioned','Mon-Fri 4pm to 10pm'),
  createData('Sahai','Bangaluru, Karnataka','+91 080 25497777, 9886444075','Not mentioned','Mon-Sat 10am to 8pm'),
  createData('Sa-Mudra Yuva Helpline','Bangaluru, Karnataka','+91 9880396331','Not mentioned','24x7'),
  createData('Arogya Sahayavani','Karnataka','104','Toll Free','24x7'),
  createData('Thanal Suicide Prevention centre','Kozhikode, Kerala','+91 0495 2760000','Not mentioned','Daily: 10am to 6pm'),
  createData('Maithri Kochi','Kochi, Kerala','+91 484 2540530','Not mentioned','Daily: 10am to 7pm'),
  createData('Pratheeksha','3N Paravur, Kerala','+91 0484 2448830','Not mentioned','Daily: 10am to 6pm'),
  createData('Prathyasa','Irinjalakuda, Kerala','+91 480 2820091','Not mentioned',''),
  createData('Sanjeevani','Thiruvananthapuram, Kerala','+91 0471 2533900','Not mentioned','Mon-Sat 1pm to 5pm'),
  createData('DISHA','Kerala','1056','Not mentioned','24x7'),
  createData('Spandan','Indore, Madhya Pradesh','+91 9630899002, +91 7389366696','Not mentioned','24x7'),
  createData('Sanjivani','Jabalpur, Madhya Pradesh','1253, +91 0761-2626622','Not mentioned',''),
  createData('Jeevan Aadhar- Adolescent Helpline','Bhopal, Madhya Pradesh','1800-233-1250','Toll Free','Daily: 9am to 5pm (Except National Holidays)'),
  createData('Hitguj help number','Mumbai, Maharashtra','+91 022 24131212','Not mentioned',''),
  createData('Aasra','Navi Mumbai, Maharashtra','+91 9820466726 ','Not mentioned','24x7'),
  createData('Nagpur Suicide Prevention Helpline','Nagpur, Maharashtra','8888817666','Not mentioned',''),
  createData('Connecting NGO','Pune, Maharashtra','1800 843 4353 (Toll-Free)/9922001122','Toll Free','Daily: 12pm to 8pm'),
  createData('Vandrevala Foundation','Maharashtra','1860 266 2345, 1800 233 3330','Not mentioned','24x7'),
  createData('Tata Institute of Social Sciences icall','Mumbai, Maharashtra','022 25521111','Toll Free','Mon-Sat 8am to 10pm'),
  createData('The Samaritans Mumbai','Mumbai, Maharashtra','+91 84229 84528 / +91 84229 84529 / +91 84229 84530','Not mentioned','Daily: 3pm to 9pm'),
  createData('Maitra Helpline','Thane, Maharashtra','+91 022 25385447','Not mentioned','Mon-Sat: 9am to 9pm and Sun: 9am to 1pm'),
  createData('Shushrusha Counseling, Guidance and Training Institute','Islampur, Maharashtra','+91 9422627571, +91 8275038382','Not mentioned','24x7'),
  createData('Health Helpline','Odisha','104','Toll Free','24x7'),
  createData('Maitreyi','Pondicherry','+91 0413 2339999','Not mentioned','Daily: 2pm to 8pm'),
  createData('Medical Consultation – Health','Punjab','104','Toll Free','24x7'),
  createData('Medical Advice and Helpline','Rajasthan','104','Toll Free','24x7'),
  createData('Hope Helpline for Students','Kota, Rajasthan','+91 0744 2333666 , +91 0744 2414141','Not mentioned','24x7'),
  createData('Suicide Prevention Helpline','Gangtok, Sikkim','221152, 18003453225','Not mentioned','24x7'),
  createData('Sneha India foundation','Chennai, Tamil Nadu','+91 044-24640050 (24/7), +91 044-24640060 (8am-10pm)  ','Not mentioned','Mon-Sun'),
  createData('Medical Helpline','Tamil Nadu','104','Toll Free','24x7'),
  createData('Jeevan Suicide Prevention Hotline','Chennai, Tamil Nadu','+91 044 2656 4444','Not mentioned','24x7'),
  createData('Roshni Trust','Secunderabad, Telangana','+91 40 6620 2000, +91 40 6620 2001','Not mentioned','Mon-Sat: 11am to 9pm'),
  createData('One Life','Hyderabad, Telangana','+91 7893078930','Not mentioned','24x7'),
  createData('Sevakendram-Health Information Helpline','Hyderabad, Telangana','104','Toll Free','24x7'),
  createData('Lifeline Foundation','Kolkatta, West Bengal', '+91 033 24637401, +91 033 24637432', 'Not mentioned', 'Mon-Sun 10am  to 6pm'),
];
function Helplines({ loggedIn, onLogin, user, setUser }) {
    const classes = useStyles();
  
  return (
    <>
      <BackHeader loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}/>
      <div id="helpline" className="main-helpline">
      
      <TableContainer component={Paper} className="cont-helpline">
          <h2>Helplines</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="main-row">
              <StyledTableCell className="main-font">Name</StyledTableCell>
              <StyledTableCell className="main-font" align="center">State</StyledTableCell>
              <StyledTableCell className="main-font" align="center">Contact No.</StyledTableCell>
              <StyledTableCell className="main-font" align="center">Free/Paid</StyledTableCell>
              <StyledTableCell className="main-font" align="center">Timings</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.state}</StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                <StyledTableCell align="center">{row.cost}</StyledTableCell>
                <StyledTableCell align="center">{row.time}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <p>NOTE:  There is no national distress helpline number in India as yet, However, there are many organizations that collaborate with the government and extend counselling services and suicide prevention helplines. The number 104 is used in Assam, Karnataka, Tamil Nadu, Odisha and Punjab for these services.
NIMHANS COVID-19 Helpline number is also extending a helping hand, their contact info is – 080 46110007
</p>
      </TableContainer>
        </div>
       
      </>
    );
  }
export default Helplines