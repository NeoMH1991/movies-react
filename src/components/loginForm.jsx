import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';

//whenever working with obj-property dynamically, always use bracket notation
//undefined and null cannot be used as values of a controlled element
class LoginForm extends Component {
    state = {
        account: {username:'',password:''},
        errors: {},
        randomNumber: 1
    }

    schema = Joi.object({
        username: Joi.string().min(5).max(20).required().label('Username'),
        password: Joi.string().min(5).max(20).required().label('Password')
    })

    schema2 = Joi.object({
        username: Joi.string().min(5).max(20).required().label('Username'),
    })

    validate = () => {
        const options = { abortEarly: false}
        const result = Joi.validate(this.state.account, this.schema, options);
        console.log('result', result); //=>
        const schema3 = Joi.build({
            password: Joi.string.min(5)
        })
        console.log(schema3.describe());

        //if no errors, return, if errors, get array and map into an obj
        if (!result.error) return null;
        const errors = {}; //empty errors obj created
 

        //iterate through the error array and map onto obj
        for (let item of result.error.details) 
        errors[item.path[0]] = item.message; //insert error.path[0] into obj with message 'error.message'

        return errors; // => {username: 'must be 5 char', password: 'must be 5 char'}
    }

    validateProperty = ({ name, value}) => { //name => username, password when field is clicked
        const obj = {name: value};
        console.log(name)
        console.log(this.schema.username);
        // var schema = Joi.object({
        //     n
        // })
        const {error} = Joi.validate(obj, this.schema2);  //something wrong with this line

        // return error? error.details[0].message : null;
        // const {error} = Joi.validate(obj, schema);

        if (name === 'username') {
            if (value.trim() === '') return 'username is required.';
        }
        if (name === 'password') {
            if (value.trim() === '') return 'password is required.';
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(); //if no errors validate => null
        this.setState({
            errors: errors || {}
        }); //error is never null
   
        if (errors) return;
    }

    handleChange = ({currentTarget: input}) => { //pick currentTarget and rename it to input
        const errors = {...this.state.errors}; //use ... to clone account
        const errorMessage = this.validateProperty(input)
        console.log('error message: ',errorMessage);

        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;

        this.setState({account, errors})

        // const errors = {...this.state.errors};
        // const errorMessage = this.validateProperty(input);
        // if (errorMessage) errors[input.name] = errorMessage;
        // else delete errors[input.name];
        // this.setState(errors);
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
                        // disabled={this.validate()}
                        className='btn btn-primary'
                        onClick={this.handleSubmit}
                        >Login</button>

                </form>
            </div>
        )
    }
}
 
export default LoginForm;