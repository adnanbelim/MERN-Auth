import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    const [signInfo, setSignInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignInfo = { ...signInfo };
        copySignInfo[name] = value;
        setSignInfo(copySignInfo);
    }
    // console.log(' -- signInfo -- ', signInfo);

    const handleSignup = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-primary'>
            <div className='block d-flex justify-content-center align-items-center'>
                <div className="container border w-50 border-1 shadow bg-transparent p-4">
                    <h2 className="text-center text-light">Signup</h2>
                    <div className="row">
                        <div className="col">
                            <form  onSubmit={handleSignup}>
                                <div class="mb-3">
                                    <label for="name" class="form-label text-light">Name</label>
                                    <input onChange={handleChange} type="name" class="form-control" id="name" name='name' placeholder="Enter Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label text-light">Email</label>
                                    <input type="email" class="form-control" id="email" name='email' placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label text-light">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Example#000" name='password' />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-outline-light w-25'>Submit</button>
                                </div>
                                <span className='mt-2 text-light'>Already have an account <Link to='/login' className='text-warning'>Login here</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup