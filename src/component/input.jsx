import React from 'react';

const Input = ({ name, label, value, onChange, error, type }) => {
    return ( 

        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input 
                value={value}
                onChange={onChange} 
                id={name}
                name={name} 
                type={type} 
                className='form-control' />

            {error && <div className='btn btn-danger'>{error}</div>}
        </div>
     );
}
 
export default Input;