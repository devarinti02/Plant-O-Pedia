import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logindetails = {
        username: 'admin',
        password: 'admin'
    };

    const handleLogin = () => {
        if (username === logindetails.username && password === logindetails.password) {
            navigate('/Data')
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className='login-form'>
            <center className='admin-centerbody'>
                <input type='text' placeholder='username' value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input type='password'placeholder='password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className='btn-prmry'  onClick={handleLogin}>Login</button>
            </center>
        </div>
    );
};

export default Admin;
