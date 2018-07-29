import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

});
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
class Contacts extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleEmailChange = (event) => {
        this.props.handleEmailChange(event.target.value);
    }
    add = () => {
        this.handleClose();
        this.props.addContact(this.props.contact.email)
    }

    render() {
        const { classes } = this.props;
        return <div>
            <Tooltip title="Add Contact">
                <Button variant="fab" onClick={this.handleClickOpen} color="secondary" className={classes.absolute}>
                    <AddIcon />
                </Button>
            </Tooltip>

            <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Add Contact"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        id="required"
                        label="enter your email"
                        className={classes.textField}
                        onChange={this.handleEmailChange}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Close
              </Button>
                    <Button onClick={this.add} color="primary">
                        Add
              </Button>
                </DialogActions>
            </Dialog>
        </div>
    }
}
export default withStyles(styles)(Contacts);