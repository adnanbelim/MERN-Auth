import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './Toast';

function Login() {

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Extracts 'name' and 'value' from the event target (input element)
        console.log(name, value); // Logs the input name and its new value

        const copySignupInfo = { ...loginInfo }; // Creates a shallow copy of the current `signupInfo` state
        copySignupInfo[name] = value; // Dynamically updates the key matching the input's 'name' attribute with the new value
        setLoginInfo(copySignupInfo); // Updates the state with the modified object
    };

    // console.log(' -- loginInfo -- ', loginInfo);

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            handleError('Please enter email or password');
            return;
        }
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                mode: 'no-cors',
                body: JSON.stringify(loginInfo),
            });
            const result = await response.json(); //result give us message and success (check Network tab)
            // console.log(result);
            const { success, message, error, jwtToken, name } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message; //(server-side validation show (Show in Network tab))
                handleError(details);
            }else if(!success){
                handleError(error);
            }

        } catch (error) {
            handleError(error);
        }
    }

    return (
        <div className='bg-primary'>
            <div className='block d-flex justify-content-center align-items-center'>
                <div className="container border w-50 border-1 shadow bg-transparent p-4">
                    <h2 className="text-center text-light">Login</h2>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleLogin}>
                                <div class="mb-3">
                                    <label for="email" class="form-label text-light">Email</label>
                                    <input onChange={handleChange} value={loginInfo.email} type="email" class="form-control" id="email" name='email' placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label text-light">Password</label>
                                    <input onChange={handleChange} value={loginInfo.password} type="password" class="form-control" id="password" placeholder="Example#000" name='password' />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-outline-light'>Submit</button>
                                </div>
                                <span className='mt-2 text-light'>Already have an account <Link to='/signup' className='text-warning'>Signup here</Link></span>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login