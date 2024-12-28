import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError } from './Toast';
import { ToastContainer } from 'react-toastify';

function Home() {

  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    handleError('Loggedout User');
    setTimeout(() => { navigate('/login') }, 1000)
  }

  const handleProducts = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/products`;
      const response = await fetch(url, {
        mode: 'no-cors',
        headers:{
          'Authorization': localStorage.getItem('token')
        }
      });
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (error) {
      handleError(error);
    }
  }

  useEffect(()=>{
    handleProducts();
  },[]);

  return (
    <div className='bg-primary'>
      <div className='block d-flex justify-content-center align-items-center'>
        <div className="container border w-50 border-1 shadow bg-transparent p-4">
          <h2 className="text-center text-light">Welcome {loggedInUser}</h2>
          <button onClick={handleLogout} className="mt-3 btn btn-outline-light">Logout</button>
          <div className="mt-3">
            {
              products && products.map((item, index) => (
                <ul key={index}>
                  <li className='text-light'>{item.name} : {item.price}</li>
                </ul>
              ))
            }
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Home