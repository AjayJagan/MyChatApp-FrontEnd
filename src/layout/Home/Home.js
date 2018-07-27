import React from 'react';
import Header from '../../containers/HeaderContainer/HeaderContainer'
import Contacts from '../../containers/Contact/ContactContainer';
import ContactList from '../../containers/Contact/ContactListContainer';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({

})
class Home extends React.Component {
   
    render() {
        const {classes} = this.props;
        return <div>
            <Header />
            <ContactList />
            <Contacts />
            </div>
            }
}

export default withStyles(styles)(Home);