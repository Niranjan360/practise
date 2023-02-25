import { useState } from "react";
import Register from "./Register";
import Signin from "./Signin";

const Trainer = () => {
    const [trainer, setTrainer] = useState(null);
    const [openSignup, setopenSignup] = useState(false);
    const [openSignin, setopenSignin] = useState(false);


    return (<div className="trainer">
        {!trainer &&<div className="course-list"></div>}

        {!trainer && !openSignin && <div className="trainer-sigup">
                                <button onClick={()=>{setopenSignup(!openSignup)}}> {!openSignup ? "New user" : "❌" }    </button>
                                {openSignup && <Register userkind="Trainer"/>}
                            </div>}

        {!trainer && !openSignup && <div className="trainer-sigin">
            <button onClick={()=>{setopenSignin(!openSignin)}}> {!openSignin ? "Sign In" : "❌"}    </button>
            {openSignin && <Signin userkind="Trainer"/>}
        </div>}

    </div> );
}
export default Trainer;