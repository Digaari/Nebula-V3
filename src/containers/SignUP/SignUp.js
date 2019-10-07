import { connect } from 'react-redux'
import React, {Component} from 'react'
// import {textChange} from './action'
import SignUp from '../../components/SignUP';

class Home extends Component {    
    constructor(props,context){
        super(props,context);
    }
    componentWillMount() {
        //Initial call will go here
    }
    
    // onButtonClick = () =>{
    //     this.props.dispatch(textChange())
    // }

    render() {
        return (
            <div>
                <SignUp label={this.props.buttonText} onClick={() => this.onButtonClick()}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
        buttonText: state.text
    }
}
const SignUpx = connect(mapStateToProps)(Home)
export default SignUpx;









