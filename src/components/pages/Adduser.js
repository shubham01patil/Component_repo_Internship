import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Adduser() {
    let navigate = useNavigate();
    const[user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });

    const{name, username, email, phone, website} = user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        navigate("/home");
    }

  return (
    <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
            <h2 className='text-center mb-4'>Add a User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='Enter your Name'
                    name='name'
                    value={name}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='Enter your Username'
                    name='username'
                    value={username}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='Enter your E-mail Address'
                    name='email'
                    value={email}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='Enter your Phone Number'
                    name='phone'
                    value={phone}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='Enter your Website Name'
                    name='website'
                    value={website}
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <button className='btn btn-success btn-block col-md-12'>Add User</button>
            </form>
        </div>
    </div>
  )
}

export default Adduser
