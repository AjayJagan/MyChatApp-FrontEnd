import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatHeader from '../../containers/HeaderContainer/chatHeader';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Message from '../Message/message';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 15,
        paddingBottom: theme.spacing.unit * 40,
        backgroundColor: 'snow',
        maxHeight: 200,
        overflow: 'auto',
        

    },
    messageBox: {
        paddingTop: '40px',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 900,
    },
    button: {
        margin: theme.spacing.unit,

    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
        paddingLeft: '10px',

    },
});

class ChatPage extends React.Component {
    componentDidMount() {
        this.props.loadMessage(this.props.match.params.email)
    }
    onMessageChange = (e) => {
        this.props.messageChange(e.target.value);
    }
    sendMessage = () => {
        if (!this.props.chat.message) {
            return
        }
        else{
            this.props.sendMessage({
                type: 'chatMessage',
                to: this.props.contact.email,
                message: this.props.chat.message
            })

           // this.props.currentMessageDisplay(this.props.chat.message); 
        }
    }
    
    render() {
        const { classes } = this.props;
        return <div>
            <ChatHeader />
            <div className={classes.messageBox}>
                <Paper className={classes.root} elevation={15}>
                  
                    <Typography variant="headline" component="h3">
                        
                        {
                            (this.props.chat.conversations[this.props.contact.email] || []).map(messageId => {
                                
                                const message = this.props.chat.messages[messageId];
                                
                                return (
                                    <div>
                                    <Message
                                        message={message}
                                        sentByMe={message.to===this.props.match.params.email}
                                        key={messageId}
                                    />
                                    </div>
                                )
                            })
                        }
                    </Typography>
                </Paper>
            </div>
            <div>
                <TextField
                    id="textarea"
                    label="Type Your Message Here"
                    placeholder="Message"
                    multiline
                    className={classes.textField}
                    margin="normal"
                    value={this.props.chat.message}
                    onChange={this.onMessageChange}
                />

                <Button variant="extendedFab" aria-label="Delete" className={classes.button} onClick={this.sendMessage}>
                    Send
            <Send className={classes.extendedIcon} />
                </Button>
            </div>
        </div>
    };
}

export default withStyles(styles)(ChatPage);