import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../../header.css'

const useStyles = makeStyles((theme) => ({

    process: {
        height: '1147px',
        backgroundColor: '#96D2AA',
        justifyContent: 'center',
        alignContent: 'center'
    },

    text: {
        position: 'absolute',
        width: '723px',
        height: '296px',
        left: '7%',
        top: '2215px',
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
        height: '290px',
        left: '50%',
        top: '2496px',
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
// className={classes.process}
function Process() {
    const classes = useStyles();
    return (
        <div className='header'>
            <p className={classes.text}>Seamless integration. Thorough testing. Better results.</p>
            <div>
                <p className={classes.paragraph}>Our software testers are led by project managers and lead developers from the US, Canada and Europe with more than 10 years of experience in QA and software testing. This guarantees clear communication and a team with an in-depth understanding of your business and testing needs. After an initial assessment, we tailor our workflow to seamlessly integrate into your current processes. We can use your preferred tools and adapt our services based on your communication models, timeline, and more.</p>
            </div>
        
        </div>
    )
}

export default Process
