import { lazy } from 'react';
import Loadable from '../components/loadable/loadable';
import MainLayout from '../layout/mainLayout/index';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../components/main/views/dashboard')));

// maps routing
const MapOne = Loadable(lazy(() => import('../components/main/views/mapOne')));
const MapTwo = Loadable(lazy(() => import('../components/main/views/mapTwo')));


// ------------------------------[ MAIN ROUTING ]------------------------------- //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },  
        {
            path: 'dashboard/default',
            element: <Dashboard />
        },  
        {
            path: 'maps',
            children: [
                {
                    path: 'mapone',
                    element: <MapOne />
                },
                {
                    path: 'maptwo',
                    element: <MapTwo />
                }, 
            ]
        },  
    ]
};

export default MainRoutes;
