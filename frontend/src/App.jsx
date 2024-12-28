import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <Routes>
        {/* Redirect root ("/") to /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Route for Home page */}
        <Route path="/home" element={<Home />} />

        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 404 Page for unmatched routes */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

