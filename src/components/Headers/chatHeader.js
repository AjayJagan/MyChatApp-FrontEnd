import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    margin:'0px 0px 0px 30px',
  },
  avatar: {
    margin: '6px 11px 7px 15px',
  },
};

class ChatHeader extends React.Component {
    componentDidMount(){
       this.props.getUserDetails(this.props.match.params.email);
    }
    nextPath(path) {
        this.props.history.push(path);
    };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ArrowBack onClick={() => this.nextPath('/')}/>
              <Avatar alt="Remy Sharp" src={this.props.userDetails.picture} className={classes.avatar} />
            </IconButton>
            </div>
            <Typography variant="title" color="inherit" className={classes.flex}>
            {this.props.userDetails.name}
         </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ChatHeader));