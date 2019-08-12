import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log(formData);
        }
    }
    return (
        <div>
            <div className="container">
                <h1 className="large text-primary">
                    <FontAwesomeIcon icon='user' size="1x" className="icons" /> Sign In
                    </h1>

                <form className="form" onSubmit={e => onSubmit(e)}>
                    
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            className="form-control"
                            required />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            minLength="6"
                            className="form-control" />
                    </div>
    
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
                <p className="my-1">
                   Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
            </div>
        </div>
    )

}

export default Register; 