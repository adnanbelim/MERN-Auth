import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function Login() {
    return (
        <div className='bg-primary'>
            <div className='block d-flex justify-content-center align-items-center'>
                <div className="container border w-50 border-1 shadow bg-transparent p-4">
                    <h2 className="text-center text-light">Login</h2>
                    <div className="row">
                        <div className="col">
                            <div className="form">
                                <div class="mb-3">
                                    <label for="email" class="form-label text-light">Email</label>
                                    <input type="email" class="form-control" id="email" name='email' placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label text-light">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Example#000" name='password' />
                                </div>
                                <span className='mt-2 text-light'>Already have an account <Link to='/signup' className='text-warning'>Signup here</Link></span>
                                <ToastContainer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login