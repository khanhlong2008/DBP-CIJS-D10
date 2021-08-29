import About from "../Containers/About";
import Home from "../Containers/Home";
import NotFound from "../Containers/NotFound";
import UserDetail from './../Components/UserDetail'


const routes = [
    {
        path:"/",
        exact:true,
        main: () => <Home/>
    },
    {
        path:"/about",
        exact:false,
        main: () => <About/>
    },
    {
        path:"/users/:login",
        exact:false,
        main: () => <UserDetail/>
    },
    {
        path:"",
        exact:false,
        main: () => <NotFound/>
    },
]

export default routes