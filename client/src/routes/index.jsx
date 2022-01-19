import { useRoutes } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import protectedRoutes from './protected';
import publicRoutes from './public';

const AppRoutes = () => {
  const auth = useAuth();

  const routes = auth.user.user ? [...protectedRoutes] : [...publicRoutes]; // reverse the if statement to see the protected routes

  // we could add also common routes here and add them to the element variable

  const element = useRoutes([...routes]);

  return element;
};

export default AppRoutes;
