import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';
import MenuAppBar from '../MenuComponent/appbar';

const Menu = props => 
<MenuAppBar/>

{/* <AppBar
    title="App Title"
    onTitleClick={props.goHome}
    iconElementRight={<FlatButton label="Change Route"  />}
    onRightIconButtonClick={props.onClick}
/> */}

Menu.propTypes = {
 goHome: PropTypes.func.isRequired
}

Menu.defaultProps = {
 goHome: () => console.log('going home')
}

export default Menu;