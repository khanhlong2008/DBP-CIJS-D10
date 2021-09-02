import Popular from './../Containers/Popular'
import Coming from './../Containers/Coming'
import Rated from './../Containers/Rated'


const routes = [
    {
        path:"/",
        exact:true,
        main: (props) => <Popular {...props}/>
    },
    {
        path:"/coming",
        exact:false,
        main: (props) => <Coming {...props}/>
    },
    {
        path:"/rated",
        exact:false,
        main: (props) => <Rated {...props}/>
    },
]
export default routes