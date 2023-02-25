import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Register = ({userkind}) => {
    const [user, setUser] = useState(userkind);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [address, setAddress] = useState('');
    const [paddress, setPaddress] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
    const handleFileChange = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
    
        reader.onload = () => {
            const imageData = {
                name: event.target.files[0].name,
                type: event.target.files[0].type,
                size: event.target.files[0].size,
                data: reader.result,
            };
            console.log(imageData);
            setFile(imageData);
            setPreview(reader.result);
        };
        };
    const handleAddressChange = (event) => setAddress(event.target.value);
    const handlePAddressChange = (event) => setPaddress(event.target.value);
    const handlesame = (event) => {
        if(event.target.checked)
        {
            setPaddress(address);
        }
        else
        {
            setPaddress("");
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(file));
        let user = {
            name , email , password , file , address , paddress 
        }
        if(userkind==="trainer")
        {
            let TY_trainers = JSON.parse(localStorage.getItem("TY_trainers"));
            TY_trainers.push(user);
            localStorage.setItem("TY_trainers" , JSON.stringify(TY_trainers) );
        }
        else if(userkind==="admin"){
            let TY_admins = JSON.parse(localStorage.getItem("TY_admins"));
            TY_admins.push(user);
            localStorage.setItem("TY_admins" , JSON.stringify(TY_admins) );
        }
    }


    return ( <div className="register" data-aos="zoom-in">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={`${userkind} name`} value={name} onChange={handleNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            <input type="file" onChange={handleFileChange} /> 
            {preview && <img src={preview} width="100px" height="100px"/> }
            <textarea value={address} placeholder="Current address" onChange={handleAddressChange} />
            <div><input type="checkbox" onClick={handlesame} /> <label> use same address as Parmenant</label></div>
            <textarea value={paddress} placeholder="Permanent address" onChange={handlePAddressChange} />

            <input type="submit" value="Register"/>
    </form>
    </div> );
}
export default Register;