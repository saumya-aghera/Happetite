import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import './Module.css'

const images1 = [
  {
    url: "../../images/yellow.png",
    title: 'Hope',
    width: '30%',
  },
  {
    url: '../../images/pink.jpg',
    title: 'Hope',
    width: '30%',
  },
  {
    url: '../../images/blue.jpg',
    title: 'Hope',
    width: '30%',
    },
  
];

const images2 = [
    {
    url: '../../images/red.jpg',
    title: 'Hope',
    width: '30%',
    },
  {
    url: '../../images/orange.jpg',
    title: 'Hope',
    width: '30%',
    },
   {
    url: '../../images/green.jpg',
    title: 'Hope',
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
                            <a href='/Hope'>
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
                            <a href='/Hope'>
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





