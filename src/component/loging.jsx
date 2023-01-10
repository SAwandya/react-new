import React, { Component } from 'react';
import Input from './input';

class LogingForm extends Component {

    state = {
        account: {username: "", password: ""},

        errors: {}
    };

    validate = () => {
        const errors = {};

        const { account } = this.state;

        if(account.username.trim() === '')
            errors.username = 'Username is required';
        if(account.password.trim() === '')
            errors.password = 'Password is required';

        return Object.keys(errors).length === 0 ? null : errors;

    }; 

    handleSubmite = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        
    }
    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    };

    validateProperty = ({ name, value }) => {
        if (name === "username") {
            if (value.trim() === "") return "Username is required";
            //...
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required";
            //...
        }

    };
    
    render() { 

        const { account, errors } = this.state;

        return (
            <div>
                <h1>Loging Form</h1>

                <form onClick={this.handleSubmite}>
                    <Input name='username' 
                        value={account.username} 
                        label='username' 
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input name='password' 
                        value={account.password} 
                        label='password' 
                        onChange={this.handleChange}
                        error={errors.password}

                    />
                        <button className="btn btn-primary">Loging</button>
                </form>    
                
            </div>
            
        );
        
    }
}
 
export default LogingForm;