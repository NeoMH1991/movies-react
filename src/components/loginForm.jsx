import React, { Component } from 'react';

//whenever working with obj-property dynamically, always use bracket notation
//undefined and null cannot be used as values of a controlled element
class LoginForm extends Component {
    state = {
        account: {username:'',password:''},
        errors: {},
    }

    validate = () => {
        const {account, errors} = this.state;
        if (account.username.trim() === '')
        errors.username = 'Username is required';
        if (account.password.trim() === '')
        errors.password = 'Password is required';
          
        return Object.keys(errors).length === 0 ? null : this.state.errors;
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(); //if no errors validate => null
        this.setState({errors: errors || {} }); //error is never null
        if (errors) return;
        console.log(errors);
    }

    handleChange = ({currentTarget: input}) => { //pick currentTarget and rename it to input
        const account = {...this.state.account}; //use ... to clone account
        account[input.name] = input.value;
        this.setState({ account });
    }  

    //Access the input-field, 
    render() { 
        const {account, errors} = this.state

        return (
            <div>
                <h1>Login</h1>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input
                        value={account.username} 
                        onChange={this.handleChange}
                        id='username'
                        name='username'
                        type="text" 
                        className='form-control'
                        error = {errors.username}
                        /></div>
{this.state.errors.username && <div className='alert alert-danger'>Username required</div>}



                        <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input
                        value={account.password} 
                        onChange={this.handleChange}
                        id='password'
                        name='password'
                        type="text" 
                        className='form-control'
                        error = {errors.password}
                        /></div>
{this.state.errors.password && <div className='alert alert-danger'>Password required</div>}

                        <button 
                        className='btn btn-primary'
                        onClick={this.handleSubmit}
                        >Login</button>

                </form>
            </div>
        )
    }
}
 
export default LoginForm;