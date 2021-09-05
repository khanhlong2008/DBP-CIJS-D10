import Detail from '../Containers/Detail'
import Home from '../Containers/Home'

const routes = [
    {
        path:"/",
        exact:true,
        main: (props) => <Home {...props}/>
    },
    {
        path:"/:id",
        exact:true,
        main: (props) => <Detail {...props}/>
    },
    
]
export default routes