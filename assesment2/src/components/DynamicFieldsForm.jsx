import { useState } from "react";

const DynamicFieldsForm = () => {
    const [emails, setEmails] = useState([""]);
    const [mobiles, setMobiles] = useState([""]);

    const handleEmailChange = (index, event) => {
        const newEmails = [...emails];
        newEmails[index] = event.target.value;
        setEmails(newEmails);
    };

    const handleMobileChange = (index, event) => {
        const newMobiles = [...mobiles];
        newMobiles[index] = event.target.value;
        setMobiles(newMobiles);
    };

    const handleAddEmail = () => {
        const newEmails = [...emails];
        newEmails.push("");
        setEmails(newEmails);
    };

    const handleAddMobile = () => {
        const newMobiles = [...mobiles];
        newMobiles.push("");
        setMobiles(newMobiles);
    };

    const handleRemoveEmail = (index) => {
        const newEmails = [...emails];
        newEmails.splice(index, 1);
        setEmails(newEmails);
    };

    const handleRemoveMobile = (index) => {
        const newMobiles = [...mobiles];
        newMobiles.splice(index, 1);
        setMobiles(newMobiles);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`All emails ${emails}`);
        console.log(`All Mobiles ${mobiles}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <h2>Emails:</h2>
            {emails.map((email, index) => (
            <div key={index}>
                <input
                type="email"
                value={email}
                onChange={(event) => handleEmailChange(index, event)}
                />
                <button type="button" onClick={() => handleRemoveEmail(index)}>
                Remove
                </button>
            </div>
            ))}
            <button type="button" onClick={handleAddEmail}>
            Add Email
            </button>
        </div>
        <div>
            <h2>Mobiles:</h2>
            {mobiles.map((mobile, index) => (
            <div key={index}>
                <input type="tel" value={mobile} onChange={(event) => handleMobileChange(index, event)}/>
                <button type="button" onClick={() => handleRemoveMobile(index)}>Remove</button>
            </div>
            ))}
            <button type="button" onClick={handleAddMobile}>Add Mobile</button>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicFieldsForm;