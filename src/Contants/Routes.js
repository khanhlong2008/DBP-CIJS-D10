import Home from '../Containers/Home'

const routes = [
    {
        path:"/",
        exact:true,
        main: (props) => <Home {...props}/>
    },
    
]
export default routes