import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class ContactList extends React.Component {
   
    componentDidMount() {
        this.props.getAllContacts();
    };
    render() {
        const { classes } = this.props;
        return <div>
        <div className={classes.root}>
        <List>
          {this.props.contactList.contacts.map((contact,key) => (
            <ListItem key={key} dense button className={classes.listItem}>
              <Avatar alt="Remy Sharp" src={contact.picture} />
              <ListItemText primary={contact.name} />
            </ListItem>
          ))}
        </List>
      </div>
        </div>
    };
}

export default withStyles(styles)(ContactList);