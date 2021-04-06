import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import i1 from "../../images/yellow.jpeg";
import i2 from "../../images/red.jpeg";
import i3 from "../../images/pink.jpeg";
import i4 from "../../images/orange.jpeg";
import i5 from "../../images/green.jpeg";
import i6 from "../../images/blue.jpeg";
import './Module.css'

const images1 = [
  {
    url: i1,
    title: 'Module 1: Hope',
    width: '30%',
  }
]
const images2 = [
  {
    url: i2,
    title: 'Module 4: TBA',
    width: '30%',
  }
]
const images3 = [
  {
    url: i3,
    title: 'Module 3: TBA',
    width: '30%',
    },
  
];

const images4 = [
    {
    url: i4,
    title: 'Module 6: TBA',
    width: '30%',
    }
]
const images5 = [
  {
    url: i5,
    title: 'Module 5: TBA',
    width: '30%',
    }
]
const images6 = [
   {
    url: i6,
    title: 'Module 2: TBA',
    width: '30%',
  }
]

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
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontWeight: 'bolder',
    fontSize: '20px',
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



function Module() {
    const classes = useStyles();

    

    return (
         
        <>
            <div className="modules" id='module'>
                <h2 className="mod-h2">Modules</h2>
                <div id="outer">
                   
                    {images1.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'5px'}}>
                            <a href='/Hope' target="_blank" >
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                    padding:'20px'
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
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                                </a>
                            </div>
                          
                        ))}

                    
{images6.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            <a href='/underconstruction' target="_blank">
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                    padding:'20px'
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
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                                </ButtonBase>
                                </a>
                            </div>
                            
                        ))}

{images3.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            <a href='/underconstruction' target="_blank">
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                    padding:'20px'
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
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                                </ButtonBase>
                                </a>
                            </div>
                            
                        ))}
                    
                </div>


                
                
                <div id="outer" >
                    
                    {images2.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            <a href='/underconstruction' target="_blank">
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                    padding:'20px'
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
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                                </ButtonBase>
                                </a>
                            </div>
                            
                        ))}
                         {images5.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            <a href='/underconstruction' target="_blank">
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                    padding:'20px'
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
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                                </ButtonBase>
                                </a>
                            </div>
                            
                        ))}
                    {images4.map((image) => (
                        
                        <div className='item' style={{ padding: '10px', display: 'inline', bottom:'20px'}}>
                            <a href='/underconstruction' target="_blank">
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                    padding:'20px'
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
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                                </ButtonBase>
                                </a>
                            </div>
                            
                        ))}
                    
                </div>
                
                
            </div>
            
        </>
    );
}

export default Module