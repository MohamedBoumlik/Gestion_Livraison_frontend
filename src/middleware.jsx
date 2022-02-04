import { Navigate, useLocation } from 'react-router-dom';

// children is the componnet you want to render on a successful login 

const PrivateRoute = ({ children , role }) => {
    let location = useLocation();
    const roleStorage = localStorage.getItem('role');

   return roleStorage === role
   ? children
   : <Navigate to={`/${role}Login`} state={{ from: location }} />;
   
};

export default PrivateRoute;