// components/ProtectedRoute.jsx
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useContext(UserContext);

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  };

  const token = localStorage.getItem('access_token');

  if (!userInfo.userId || !token || isTokenExpired(token)) {
    return <Navigate to="/sign-in" replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;