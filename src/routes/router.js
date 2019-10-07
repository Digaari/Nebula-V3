import React from "react";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Login from "../containers/Login/Login";
import SignUpx from "../containers/SignUP/SignUp";
import Land from "../containers/LandingPage/index";
import App from "../containers/LandingPage";
import Main from "../containers/Main";


class RouteComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
          <div>
            <Switch>
              <Route exact path='/main' component={Main} />
              <Route exact path='/' component={Land} /> 
              <Route exact path='/login' component={Login} /> 
              <Route exact path='/signup' component={SignUpx} /> 
              {/* <Route exact path='/nebula1' component={Land} />  */}
              <Route render={() => <div history={ this.props.history }> Route Not Found </div>}/>
            </Switch>
          </div>          
      </div>)
  }
}

export default withRouter(RouteComp);