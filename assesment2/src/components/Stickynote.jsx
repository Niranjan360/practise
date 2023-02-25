import { useEffect , useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Stickynote = () => {
    const [TY_users , setTY_users]  = useState("");

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [project, setProject] = useState("");

    const getRandomBgColor = () => {
        const colors = ["#ff5733", "#c70039", "#900c3f", "#581845", "#f7dc6f", "#f0b27a", "#85c1e9", "#5dade2", "#48c9b0", "#f5b041"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(()=>{
        if(localStorage.getItem("TY_users")==null)
        {
            localStorage.setItem("TY_users" , "[]");
        }
        else{
            let TY_users = JSON.parse(localStorage.getItem("TY_users"));
            setTY_users(TY_users);
        }
    },[name])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {name , status , project , bgColor : getRandomBgColor()};
        let TY_users = JSON.parse(localStorage.getItem("TY_users"));
        TY_users.push(newUser);
        TY_users = JSON.stringify(TY_users);
        localStorage.setItem("TY_users" , TY_users);
        alert("new user added")
        setName("");
        setProject("");
        setStatus("");
    };

    return ( 
    <>
    <h1>This is a component for question 3  </h1>
    <div className="stickynote">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="status">Status:</label>
                <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />

                <label htmlFor="project">Project:</label>
                <input type="text" id="project" value={project} onChange={(e) => setProject(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="user-container">
            {
                TY_users && <>
                {TY_users.map((user)=>{
                    return(<div   data-aos="zoom-in">
                        <div className="user-detail" style={{backgroundColor:user.bgColor}}>
                        <h4>Name : {user.name}</h4>
                        <h4>Status : {user.status}</h4>
                        <h4>Project : {user.project}</h4>
                    </div>
                    </div>)
                })}
                </>
            }
        </div>

    </div>
    </> );
}
export default Stickynote;