
import aRoutes from "./aRoutes"
import A from "../components/A"
import B from "../components/B"
import C from '../components/C'
import A1 from '../components/A/A1'
import A2 from '../components/A/A2'
import A3 from '../components/A/A3'

import { lazy } from "react"
import { Navigate } from "react-router"
import ReducerComp from "../views/reducers"
const routes = [
    {
        path: '/',
        element: <Navigate to='/A' />
    },
    {
        path: '/A',
        element: <A />,
        name: 'a',
        meta: {},
        children: [
            {
                path: '/A',
                element: <Navigate to='/A/A1' />
            },
            {
                path: '/A/A1',
                name: 'a1',
                element: <A1 />,
            },
            {
                path: '/A/A2',
                name: 'a2',

                element: <A2 />,
            },
            {
                path: '/A/A3',
                name: 'a3',

                element: <A3 />,
            },

        ]
    },
    {
        path: '/B/:id/:name',
        element: <B />,
        name: 'b',
        meta: {},
        children: []
    },
    {
        path: '/C',
        element: <C />,
        name: 'c',
        meta: {},
    },
    {
        path: '/reducer',
        element: <ReducerComp />,
        name: 'reducer'
    }

]
export default routes
