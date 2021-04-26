import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import i1 from "../../images/yellow.jpg";
import i2 from "../../images/red.jpg";
import i3 from "../../images/pink.jpg";
import i4 from "../../images/orange.jpg";
import i5 from "../../images/green.jpg";
import i6 from "../../images/blue.jpg";
import './Module.css';
import { MDBIcon } from 'mdbreact';
import { Modal, Button } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
 
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      border: 'none',
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      color: theme.palette.common.white,
    paddding:'20px'
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontWeight: 'bolder',
    fontSize: '20px',
    fontFamily: 'Raleway', 
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



function Module({updatedModuleStatus,changeUpdatedModuleStatus}) {
    const classes = useStyles();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        
        setShow(true);
    }

    const images1 = [
        {
            url: i1,
            title: "Module 1: There's always Hope and Scope",
            width: '30%',
            moduleComplete: updatedModuleStatus.module1_completed,
            open: true,
            pageUrl:"/Module1"
        }
    ];
    const images2 = [
        {
            url: i2,
            title: 'Module 4: Make gratitude your attitude',
            width: '30%',
             moduleComplete: updatedModuleStatus.module4_completed,
            open: updatedModuleStatus.module1_completed && updatedModuleStatus.module2_completed
                && updatedModuleStatus.module3_completed,
            pageUrl:"/Module4"
        }
    ];
    const images3 = [
        {
            url: i3,
            title: 'Module 3: Looking for the good things in life',
            width: '30%',
            moduleComplete: updatedModuleStatus.module3_completed,
            open: updatedModuleStatus.module1_completed && updatedModuleStatus.module2_completed,
            pageUrl:"/Module3"
        },
  
    ];

    const images4 = [
        {
            url: i4,
            title: 'Module 6: My safety',
            width: '30%',
            moduleComplete: updatedModuleStatus.module6_completed,
            open: updatedModuleStatus.module1_completed && updatedModuleStatus.module2_completed
                && updatedModuleStatus.module3_completed && updatedModuleStatus.module4_completed
                && updatedModuleStatus.module5_completed,
            pageUrl:"/Module6"
           
        }
    ];
    const images5 = [
        {
            url: i6,
            title: 'Module 5: Strength on your side',
            width: '30%',
            moduleComplete: updatedModuleStatus.module5_completed,
            open: updatedModuleStatus.module1_completed && updatedModuleStatus.module2_completed
                && updatedModuleStatus.module3_completed && updatedModuleStatus.module4_completed,
            pageUrl:"/Module5"
        }
    ];
    const images6 = [
        {
            url: i5,
            title: 'Module 2: Right here, Right now',
            width: '30%',
            moduleComplete: updatedModuleStatus.module2_completed,
            open: updatedModuleStatus.module1_completed,
            pageUrl:"/Module2"
            
        }
    ];
       


    
    return (
         
        <>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
        
                    <Modal.Body>Please complete previous modules to unlock this module</Modal.Body>
                    </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
         
        </Modal.Footer>
      </Modal>
            <div className="modules" id='module'>
                <h2 className="mod-h2">Modules</h2>
                <div id="outer">
                    
                    {images1.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'5px'}}>
                            
                            {image.open ? (<a href={image.pageUrl} >
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    }}
                >
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
    </a>) :
        
            <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                                    }}
                                    onClick={handleShow}
        >
           
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
            }

                            </div>
                          
                        ))}

                    
{images6.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            {image.open ? (<a href={image.pageUrl} >
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    }}
                >
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
    </a>) :
        
            <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    
                }}
                onClick={handleShow}
        >
           
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
            }

                            </div>
                            
                        ))}

{images3.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            {image.open ? (<a href={image.pageUrl} >
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    }}
                >
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
    </a>) :
        
            <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                }}
                onClick={handleShow}
        >
           
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
            }

                            </div>
                            
                        ))}
                    
                </div>


                
                
                <div id="outer" >
                    
                    {images2.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            {image.open ? (<a href={image.pageUrl} >
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    }}
                >
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
    </a>) :
        
            <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                                    }}
                                    onClick={handleShow}
        >
            
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
            }

                            </div>
                            
                        ))}
                         {images5.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            {image.open ? (<a href={image.pageUrl} >
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    }}
                >
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
    </a>) :
        
            <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                                         }}
                                         onClick={handleShow}
        >
            
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
            }

                            </div>
                            
                        ))}
                    {images4.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                           {image.open ? (<a href={image.pageUrl} >
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                    }}
                >
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
    </a>) :
        
            <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                        padding: '20px'
                                    }}
                                onClick={handleShow}
        >
            
                    <span
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                        className={classes.imageSrc}
                                    
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            {image.moduleComplete ? <div>
                                <MDBIcon icon="fa fa-check-square" style={{ fontSize: "40px", color: 'white' }} />
                            </div> : null}
                            <span className={classes.imageMarked} />
                        </Typography>
                                       
                    </span>
                                    
                </ButtonBase>
            }

                            </div>
                            
                        ))}
                    
                </div>
                
                
            </div>
            
        </>
    );
}

export default Module