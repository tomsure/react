
import aRoutes from "./aRoutes"
import A from "../components/A"
import { lazy } from "react"
const routes = [
    {

        redirect: true,
        from: '/',
        to: '/A',
        exact: true,
    },
    {
        path: '/A',
        component: A,
        name: 'a',
        meta: {},
        children: aRoutes
    },
    {
        path: '/B',
        component: lazy(() => import('../components/B')),
        name: 'b',
        meta: {},
        children: []
    },
    {
        path: '/C',
        component: lazy(() => import('../components/C')),
        name: 'c',
        meta: {},
    },

]
export default routes
