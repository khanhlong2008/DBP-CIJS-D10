import About from "../Containers/About";
import Home from "../Containers/Home";
import NotFound from "../Containers/NotFound";
import UserDetail from '../Containers//UserDetail'
import SearchUser from "../Containers/Search";


const routes = [
    {
        path:"/",
        exact:true,
        main: (props) => <Home {...props}/>
    },
    {
        path:"/about",
        exact:false,
        main: (props) => <About {...props}/>
    },
    {
        path:"/search",
        exact:false,
        main: (props) => <SearchUser {...props}/>
    },
    {
        path:"/users/:login",
        exact:false,
        main: (props) => <UserDetail {...props}/>
    },
    {
        path:"",
        exact:false,
        main: (props) => <NotFound {...props}/>
    },
]

export default routes