import { useState } from "react";


export default function SignUpForm (){
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit (e){
    e.preventDefault();
    console.log("Hello");

}


    return (
    <>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value ={username} onChange={(dt)=> setUsername(dt.target.value)}/>
        </label>
        <label>
            Password: <input value ={password} onChange={(dt)=> setPassword(dt.target.value)}/>
        </label>
        <button>Submit</button>

    </form>
    </>

);}