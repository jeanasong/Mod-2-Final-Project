import React from 'react';
import logo from './logo.png';
import {fetchAPIResponse} from '../actions/fetch_api_data';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class Login extends React.Component{
    state = {
        email: " ",
        password: " ",
        value: " "
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})

    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.FetchAPIResponse(this.state.value)
        const {email, password, value} = this.state;
        this.props.history.push('/main')


    }
    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="email" name="email" placeholder="email..." required onChange={this.handleChange}/>
                        <input type="password" name="pwd" placeholder="password..." required onChange={this.handleChange}/>
                        <button onSubmit = {this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    //bind the action to be executed
    return bindActionCreators({FetchAPIResponse:fetchAPIResponse}, dispatch);
  }

export default connect(null,mapDispatchToProps)(Login)