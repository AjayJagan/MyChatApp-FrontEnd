import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    googleSignIn: {
        margin: '15px 0',
        backgroundColor: '#FFF',
        margin: 5
    },
    googleLogo: {
        width: 25,
        height: 25,
        marginRight: 10,
        background: '#fff',
        borderRadius: 100,
        padding: 7
    },
    loginOptions: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F6F8F8',
        width: '100%'
    },
    loginPaperContent: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginPaper: {
        position: 'absolute',
        height: '50%',
        width: 600,
        top: '25%',
        left: '50%',
        marginLeft: -300
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70%'
    },
      logo: {
        height: 400,
        width: 300
      },
});

class Login extends React.Component {
    componentDidMount() {
        this.init();
    }

    init() {
        let self = this;
        var startApp = function () {
            gapi.load('auth2', function () {
                self.auth2 = gapi.auth2.init({
                    client_id: '869271940148-kbri91u4utl41qbpg7b9oejr3369038h.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin'
                });
                self.attachSignin(document.getElementById('customBtn'));
            });
        };
        startApp();
        () => checkSignedInUser();
    }

    attachSignin(element) {
        this.auth2.attachClickHandler(element, {}, (googleUser) => {
            let id_token = googleUser.getAuthResponse().id_token;
            this.props.loginGoogleUser(id_token, true);
        }, console.log);
    }

    checkSignedInUser = () => {
        const userObject = localStorage.getItem('userObject');
        if (userObject) {
            this.props.loginGoogleUser(JSON.parse(userObject), false);
        }
    }

    render() {
        let { classes } = this.props;

        if (this.props.isAuthenticated) {
            return this.props.children;
        }
        return <div>
                <Paper
                    classes={{ root: classes.loginPaper }}
                >   
                    <div className={classes.loginPaperContent}>
                    <div className={classes.logoContainer}>
                    <img src={require('../../static/images/chat-bubble.jpg')} className={classes.logo} />
                    </div>
                        <div className={classes.loginOptions}>
                            <div>
                                <Button variant='raised' id='customBtn' className={classes.googleSignIn}><img src={require('../../static/images/google-logo.png')} className={classes.googleLogo} />Login with Google</Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
    };
};

export default withStyles(styles)(Login);