import React, { Component } from 'react';
import Input from './input';
import joi from 'joi-browser';

class LogingForm extends Component {

    state = {
        account: {username: "", password: ""},

        errors: {}
    };
    
    schema = {
        username: joi.string().required().label("Username"),    //label use for display ower own word
        password: joi.string().required().label("Password")
    }


    validate = () => {
        const option = { abortEarly: false };
        const { error } = joi.validate(this.state.account, this.schema, option);

        if(!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;

        // console.log(result);
        // const errors = {};

        // const { account } = this.state;

        // if(account.username.trim() === '')
        //     errors.username = 'Username is required';
        // if(account.password.trim() === '')
        //     errors.password = 'Password is required';

        // return Object.keys(errors).length === 0 ? null : errors;

    };
    
    validateProperty = ({ name, value }) => {
        // if (name === "username") {
        //     if (value.trim() === "") return "Username is required";
        //     //...
        // }
        // if (name === "password") {
        //     if (value.trim() === "") return "Password is required";
        //     //...
        // }

         const obj = { [name]: value};
         const schema = { [name]: this.schema[name] };
         const { error } = joi.validate(obj, schema);
         return error ? error.details[0].message : null; 
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
                        <button disabled={this.validate()} className="btn btn-primary">Loging</button>
                </form>    
                
            </div>
            
        );
        
    }
}
 
export default LogingForm;