import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class Message extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Typography>{this.props.message.message}</Typography>

        );
    }
}

export default withStyles(styles)(Message);