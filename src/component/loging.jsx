import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi-browser';

class LogingForm extends Form {

    state = {
        data: { username: "", password: ""}, 

        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),    //label use for display ower own word
        password: Joi.string()
            .required()
            .label("Password")
    }
    

    doSubmit = () => {
        //call the server
        console.log("Submitted");
    } 

    render() { 

        

        return (
            <div>
                <h1>Loging Form</h1>

                <form onSubmit={this.handleSubmite}>

                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Psername', "password")}
                    
                    {this.renderButton("Loging")}    
                </form>    
                
            </div>
            
        );
        
    }
}
 
export default LogingForm;