import NavBoot from "../../Navbar/NavBoot"
import Left from "../Left"
import Right from "../Right"
import './style.css'

const Corpo = () =>{
    return(
        <>
            <NavBoot/>
            <div className="main">
                <Left/>
                <Right/>
            </div>
        </>
    )
}

export default Corpo