"use client"
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [email, setEmail] = useState('test@gmail.com');
    const [name, setName] = useState('tester');
    const [password, setPassword] = useState('testpass1');

    const handleSubmit = async (event : any) => {
        event.preventDefault();

        const user = {
          email,
          name,
          password
        };

        try {
            const response = await fetch('http://localhost:5026/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // mode: 'no-cors',
                body: JSON.stringify(user)
            });
          

            console.log('response: ', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('data: ', data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <input type="submit" value="Register" />
        </form>
    );
};

export default RegistrationForm;