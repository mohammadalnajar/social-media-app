// import React from 'react';
// import { Router, useRoutes } from 'react-router-dom';
// import { useAuth } from '../context/authContext';
// import EntryLayout from '../features/entry/EntryLayout';

// const publicRoutes = [
//   {
//     path: '/',
//     element: <EntryLayout />,
//   },
// ];
// const protectedRoutes = [
//   { path: '/about', element: <div>about page</div> },
//   { path: '/home', element: <div>home page</div> },
// ];

// // const location = new ReactLocation();

// const AppRoutes = () => {
//   const auth = useAuth();

//   // const commonRoutes = [{ path: '/', element: <Landing /> }];

//   const routes = auth.user ? protectedRoutes : publicRoutes;

//   const element = useRoutes([...routes]);

//   // eslint-disable-next-line react/jsx-no-useless-fragment
//   return <>{element}</>;
// };

// export default AppRoutes;
