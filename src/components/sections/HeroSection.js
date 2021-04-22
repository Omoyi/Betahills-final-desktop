import React from 'react'
import Button from '../MainButton'
import { makeStyles } from '@material-ui/core/styles';
import '../../header.css'
const useStyles = makeStyles((theme) => ({
    
    text: {
        position: 'absolute',
        width: '723px',
        height: '222px',
        left: '90px',
        top: '249px',
        fontSize: '64px',
        fontStyle:'normal',
        fontWeight: 550,
        lineHeight: '74px',
        fontFamily: 'Roboto',
        letterSpacing: '0.02em',
        marginLeft: '90px',
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
        <div style={{backgroundColor: '#96D2AA'}}>
        <div >
            <hr className={classes.line}/>
            <h2 className={classes.text}>We do software testing<br/> for flawless products.<br/>With a purpose.</h2>
            <Button/>
        </div></div>
    )
}

export default HeroSection
