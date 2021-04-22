import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../../section.css'

const useStyles = makeStyles((theme) => ({

    about: {
        height: '1147px',
        width: '85%',
        justifyContent: 'center',
        alignContent: 'center'
    },

    text: {
        position: 'absolute',
        width: '747px',
        height: '296px',
        left: '7%',
        top: '1055px',
        fontSize: '64px',
        fontStyle:'normal',
        fontWeight: 500,
        lineHeight: '74px',
        fontFamily: 'Arial',
        letterSpacing: '0.02em',
        fontFeatureSettings: `'liga', off`,
        color: '#0100CD'
    },
      paragraph: {
        position: 'absolute',
        width: '535px',
        height: '319px',
        left: '50%',
        top: '1410px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '17px',
        lineHeight: '29px',
        letterSpacing: '0.125em',
        fontFeatureSettings: `'liga' off`,
        color: '#0100CD'
    }
}));
function About() {
    const classes = useStyles();
    return (
        <div className={classes.about}>
            <p className={classes.text}>Our expert testers handle quality assurance so you can focus on building your ideas.</p>
            <div>
                <p className={classes.paragraph}>Betahills was founded by Lena Simon in Berlin in 2019.
                We connect European businesses with a team of femalesoftware testers in Rwanda. Our team seamlessly integrates into your existing processes at no additional cost and makes sure your solution is flawless and ready for market. Our certified testers are part of Rwanda’s first and only QA and software testing team and work together with experienced technical leads and project managers from the US, Canada and Europe. Betahills connects these female tech professionals in Rwanda with an international client base.</p>
            </div>
        
        </div>
        
    )
}

export default About
