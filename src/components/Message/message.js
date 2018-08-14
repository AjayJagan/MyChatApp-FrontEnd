import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    messageFrom: {
        background: '#4169E1',
        maxWidth: 'fit-content',
        maxHeight: 'fit-content',
        padding: '4px 15px 4px 18px',
    },
    messageTo: {
        background: '#acbcee',
        maxWidth: 'fit-content',
        maxHeight: 'fit-content',
        padding: '4px 15px 4px 18px',
    },
    space: {
        paddingBottom: '20px'
    },
    text: {
        color: 'white',
        fontFamily: 'cursive',
        textIndent: '2px',
        fontSize: 'medium',
        fontWeight: 'bold',
    }
});

class Message extends React.Component {
    render() {
        const { classes } = this.props;

        return (<div>
            <Paper className={this.props.sentByMe ? classes.messageFrom : classes.messageTo} elevation={13}><Typography className={classes.text}>{this.props.message.message}</Typography></Paper>
            <div className={classes.space}></div>
        </div>

        );
    }
}

export default withStyles(styles)(Message);