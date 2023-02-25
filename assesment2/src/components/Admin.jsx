import { useState } from "react";
import Register from "./Register";
import Signin from "./Signin";

const Admin = () => {
    const [admin, setAdmin] = useState(null);
    const [openSignup, setopenSignup] = useState(false);
    const [openSignin, setopenSignin] = useState(false);


    return (<div className="admin">
        {!admin &&<div className="course-list"></div>}

        {!admin && !openSignin && <div className="admin-sigup">
                                <button onClick={()=>{setopenSignup(!openSignup)}}> {!openSignup ? "New user" : "❌" }    </button>
                                {openSignup && <Register userkind="Admin"/>}
                            </div>}

        {!admin && !openSignup && <div className="admin-sigin">
            <button onClick={()=>{setopenSignin(!openSignin)}}> {!openSignin ? "Sign In" : "❌"}    </button>
            {openSignin && <Signin userkind="Admin"/>}
        </div>}

    </div> );
}
export default Admin;