import Home from "../components/home";
import Serve from "../components/serve/index/serve";
import Cooperation from "../components/cooperation/index";
import Classic from "../components/classic/index/classic";
import Recommend from "../components/recommend/index/recommend";
import Rare from "../components/rare/index/rare";


export const routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/serve',
        component: Serve
    },
    {
        path: '/cooperation',
        component: Cooperation
    },
    {
        path: '/classic/:id',
        component: Classic

    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/rare',
        component: Rare,
    }
]