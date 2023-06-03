



import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Uncertain from '../pages/Uncertain/Uncertain';
const Main = lazy(() => import('../components/layout/Main'));
const Upcoming = lazy(() => import('../pages/Appointments/Upcoming/Upcoming'));
const Error404 = lazy(() => import('./../pages/ErrorPages/404'));

const MasterRoutes = () => {

    return useRoutes([
        {
            path: '/',
            element: <Main />,
            children: [
                { index: true, element: <Upcoming /> },
                {
                    path: 'upcoming-appointments',
                    element: <Upcoming />
                },
                {
                    path: 'uncertain-appointments',
                    element: <Uncertain />
                }
            ]
        },
        { path: '*', element: <Error404 />  },
    ])
};

export default MasterRoutes;