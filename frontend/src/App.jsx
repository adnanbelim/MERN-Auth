import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthRoute, setIsAuthRoute] = useState(false);

  // Function to guard private routes (e.g., /home)
  const privateRoutes = ({ element }) => {
    return !isAuthRoute ? element : <Navigate to="/login" />;
  };

  // Function to guard public routes (e.g., /signup, /login)
  const publicRoutes = ({ element }) => {
    return isAuthRoute ? element : <Navigate to="/home" />;
  };

  return (
    <>
      <RefreshHandler setIsAuthRoute={setIsAuthRoute} />
      <Routes>
        {/* Redirect root to /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Private Route: Only logged-in users can access */}
        <Route path="/home" element={privateRoutes({ element: <Home /> })} />

        {/* Public Routes: Only accessible if not logged in */}
        <Route path="/signup" element={publicRoutes({ element: <Signup /> })} />
        <Route path="/login" element={publicRoutes({ element: <Login /> })} />

        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
