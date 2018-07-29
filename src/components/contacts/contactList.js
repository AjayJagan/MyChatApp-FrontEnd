import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 15,
        backgroundColor: 'snow',
        maxHeight: '500',
        maxWidth:'200', 
        overflow: 'auto'
    },
    align: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        paddingLeft: '72px',
    }
});

class ContactList extends React.Component {

    componentDidMount() {
        this.props.getAllContacts();
    };
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        const { classes } = this.props;
        return <div>
            <div className={classes.root}>
                <div className={classes.align}>
                    <Paper className={classes.paper} elevation={10}>
                        <List>
                            {this.props.contactList.contacts.map((contact, key) => (
                                <ListItem key={key} dense button className={classes.listItem} onClick={() => this.nextPath(`/chat/${contact.email}`)}>
                                    <Avatar alt="Noob Pics" src={contact.picture} />
                                    <ListItemText primary={contact.name} />
                                </ListItem>
                            ))
                            }
                        </List>
                    </Paper>
                </div>
            </div>
        </div>
    };
}

export default withRouter(withStyles(styles)(ContactList));