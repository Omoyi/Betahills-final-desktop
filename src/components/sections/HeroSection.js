import React from 'react'
import Button from '../MainButton'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    heroSxt: {
        width: '85%',
    },

    text: {
        position: 'absolute',
        width: '723px',
        height: '222px',
        left: '7%',
        top: '249px',
        fontSize: '64px',
        fontStyle:'normal',
        fontWeight: 500,
        lineHeight: '74px',
        fontFamily: 'Arial',
        letterSpacing: '0.02em',
        fontFeatureSettings: `'liga', off`,
        color: '#0100CD'
    },
    

    line: {
        position: 'absolute',
        width: '100%',
        height: '0px',
        left: '0px',
        top: '80px',
        border: '1px solid #0100CD'
    }
}));

function HeroSection() {
    const classes = useStyles();
    return (
        <div>
            <hr className={classes.line}/>
        <div className={classes.heroSxt}>  
            <p className={classes.text}>We do software testing for flawless products. With a purpose.</p>
            <Button/>
        </div></div>
    )
}

export default HeroSection
