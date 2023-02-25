import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Signin = ({userkind}) => {
    const [user, setUser] = useState(userkind);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return ( <div className="register" data-aos="zoom-in">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={`${userkind} name`} value={name} onChange={handleNameChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <input type="submit" value="Signin"/>
    </form>
    </div> );
}
export default Signin;