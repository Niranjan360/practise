import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(()=>{
        if(localStorage.getItem("TY_admins")==null)
        {
            localStorage.setItem("TY_admins" , "[]");
        }

        if(localStorage.getItem("TY_trainers")==null)
        {
            localStorage.setItem("TY_trainers" , "[]");
        }        
    })




    return ( 
    <div className="home">
        <Link to="/trainer">
            <div>
                <h1>👨‍🏫 </h1> 
                <h1>Trainer</h1>
            </div>
        </Link>
        <Link to="/admin">
        <div>
                <h1> 👨‍💻   </h1> 
                <h1>Admin</h1>
            </div>
        </Link>
        <Link to="/about">
            <div>
                <h1>💁</h1>
                <h1>About us</h1>
            </div>
        </Link>
    </div> );
}
export default Home