import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from './Toast';

function Signup() {

    const navigate = useNavigate();

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Extracts 'name' and 'value' from the event target (input element)
        console.log(name, value); // Logs the input name and its new value

        const copySignupInfo = { ...signupInfo }; // Creates a shallow copy of the current `signupInfo` state
        copySignupInfo[name] = value; // Dynamically updates the key matching the input's 'name' attribute with the new value
        setSignupInfo(copySignupInfo); // Updates the state with the modified object
    };

    // console.log(' -- signupInfo -- ', signupInfo);

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            handleError('All field are require!!');
            return;
        }
        try {
            const url = 'http://localhost:9000/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(signupInfo),
            });
            const result = await response.json(); //result give us message and success (check Network tab)
            // console.log(result);
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message; //(server-side validation show (Show in Network tab))
                handleError(details);
            } else if (!success) {
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
                    <h2 className="text-center text-light">Signup</h2>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSignup}>
                                <div class="mb-3">
                                    <label for="name" class="form-label text-light">Name</label>
                                    <input
                                        onChange={handleChange}
                                        value={signupInfo.name}
                                        type="name" class="form-control"
                                        id="name"
                                        name='name'
                                        placeholder="Enter Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label text-light">Email</label>
                                    <input onChange={handleChange} value={signupInfo.email} type="email" class="form-control" id="email" name='email' placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label text-light">Password</label>
                                    <input onChange={handleChange} value={signupInfo.password} type="password" class="form-control" id="password" placeholder="Example#000" name='password' />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-outline-light'>Submit</button>
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