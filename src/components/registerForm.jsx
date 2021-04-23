import React, { Component } from 'react';
import Input from './input';
import * as yup from 'yup';

class registerForm extends Component {

    state = {
        data: {username:'',password:'', name:''},
        errors: {},
    }

    schema = yup.object().shape({
        username: yup.string().required().email().label('Username'),
        password: yup.string().required().min(5).label('Password'),
        name: yup.string().required().min(5).label('Name')
    })

    validate = () => {
        const options = { abortEarly: false}
        const result = this.schema.validate(this.state.data, this.schema);
        console.log('result', result); //=>
    }

    validateProperty = ({ name, value}) => { //name => username, password when field is clicked
        if (name === 'username') {
            if (value.trim() === '') return 'username is required.';
        }
        if (name === 'password') {
            if (value.trim() === '') return 'password is required.';
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('button pressed')
        // let formData = {
        //     username: e.target[0].value,
        //     password: e.target[1].value
        // }
        // const errors = this.validate(); //if no errors validate => null
        // this.setState({
        //     errors: errors || {}
        // }); //error is never null
   
        // if (errors) return;
    }

    handleChange = ({currentTarget: input}) => { //pick currentTarget and rename it to input
        const errors = {...this.state.errors}; //use ... to clone account
        const errorMessage = this.validateProperty(input)
        console.log('error message: ',errorMessage);

        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;

        this.setState({data, errors})
    }  

    render() {
        const {data, errors} = this.state

        return (
            
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                        <Input
                        name='username'
                        value={data.username} 
                        onChange={this.handleChange}
                        label='Username'
                        error = {errors.username}
                        />

                        <Input
                        name='password'
                        value={data.password} 
                        onChange={this.handleChange}
                        label='Password'
                        error = {errors.password}
                        />

                        <Input
                        name='name'
                        value={data.name} 
                        onChange={this.handleChange}
                        label='Name'
                        error = {errors.name}
                        />

                        <button 
                        // disabled={this.validate()}
                        className='btn btn-primary'
                        onClick={this.handleSubmit}
                        >Register</button>

                </form>
            </div>
        );
    }
}

export default registerForm;