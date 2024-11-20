import { Outlet } from "react-router-dom"
import Header from "../../components/Headers/header"

const Home=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Home;