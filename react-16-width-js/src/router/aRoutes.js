import { lazy } from "react"
// import A1 from "../components/A/A1"
// import A2 from "../components/A/A2"
// import A3 from "../components/A/A3"
import a1Routes from "./a1Routes"

const aRoutes = [
    {
        redirect: true,
        from: '/A',
        to: '/A/A1',
        exact: true,
    },
    {
        path: '/A/A1',
        component: lazy(() => import('../components/A/A1/A11')),
        name: 'a1',
        meta: {},
        children: a1Routes
    },
    {
        path: '/A/A2',
        component: lazy(() => import('../components/A/A2')),
        name: 'a2',
        meta: {},
        children: []
    },
    {
        path: '/A/A3',
        component: lazy(() => import('../components/A/A3')),
        name: 'a3',
        meta: {},
    },
]
export default aRoutes
