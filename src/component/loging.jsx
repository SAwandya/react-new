import React, { Component } from 'react';
import Input from './input';

class LogingForm extends Component {

    state = {
        account: {username: "", password: ""}
    };

    handleSubmite = e => {
        e.preventDefault();

        console.log("Submited");
    }
    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    };
    
    render() { 

        const { account } = this.state;

        return (
            <div>
                <h1>Loging Form</h1>

                <form onClick={this.handleSubmite}>
                    <Input name='username' 
                        value={account.username} 
                        label='username' 
                        onChange={this.handleChange}
                    />
                    <Input name='password' 
                        value={account.password} 
                        label='password' 
                        onChange={this.handleChange}
                        
                    />
                        <button className="btn btn-primary">Loging</button>
                </form>    
                
            </div>
            
        );
        
    }
}
 
export default LogingForm;