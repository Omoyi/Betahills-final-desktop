import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btnSpace: {
        display: 'inline-block',
        flexDirection: 'row',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    button: { 
        position: 'absolute',      
        left: '50%',
        top: '523px',
        padding: '10px, 31px',
        width: '177px',
        height: '49px',     
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '17px',
        lineHeight: '29px',
        letterSpacing: '0.125em',
        cursor: 'pointer', 
        backgroundColor: '#96D2AA', 
        color: '#0100CD', 
        border: '1px solid #0100CD',
        '&:hover': {
            background: "#0100CD",
            color: 'white'
         },
    },
}));

function MainButton() {
    const classes = useStyles();
    return (
        <div className={classes.btnSpace}>
            <button className={classes.button}>
                Get in touch
            </button>
        </div>
    )
}

export default MainButton
