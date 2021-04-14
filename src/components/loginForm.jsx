import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';

//whenever working with obj-property dynamically, always use bracket notation
//undefined and null cannot be used as values of a controlled element
class LoginForm extends Component {
    state = {
        account: {username:'',password:''},
        errors: {},
    }

    schema = Joi.object({
        username: Joi.string().min(5).max(10).required().label('Username'),
        password: Joi.string().min(5).max(10).required().label('Password')
    })

    validate = () => {
        const options = { abortEarly: false}
        const result = Joi.validate(this.state.account, this.schema, options);
        console.log(result);

        //if no errors, return, if errors, get array and map into an obj
        if (!result.error) return null;
        const errors = {};
        console.log(result.error.details); // => Array of 4 items

        //iterate through the error array and map onto obj
        for (let item of result.error.details) 
        errors[item.path[0]] = item.message;
        console.log(errors);
        return errors; // => {username: 'must be 5 char', password: 'must be 5 char'}
    }

    validateProperty = ({ name, value}) => { //name => username, password when field is clicked
        Joi.validate()
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(); //if no errors validate => null
        this.setState({errors: errors || {} }); //error is never null
        if (errors) return;
    }

    handleChange = ({currentTarget: userInput}) => { //pick currentTarget and rename it to input
        const account = {...this.state.account}; //use ... to clone account
        account[userInput.name] = userInput.value; // => Current userInput
        console.log('userinput name',userInput.name);
        this.setState({ account });
    }  

    //Access the input-field, 
    render() { 
        const {account, errors} = this.state

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                        <Input
                        name='username'
                        value={account.username} 
                        onChange={this.handleChange}
                        label='Username'
                        error = {errors.username}
                        />

                        <Input
                        name='password'
                        value={account.password} 
                        onChange={this.handleChange}
                        label='Password'
                        error = {errors.password}
                        />

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