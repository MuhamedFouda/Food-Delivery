import { useState } from 'react'
import './LoginPopup.scss'
import 'animate.css';
import { assets } from '../../assets/assets'

export default function LoginPopup({ setShowLogin }) {
    const [currentState, setCurrentState] = useState("Login")
    return (
        <div className='loginpopup'>
            <form className="login-popup-container animate__animated animate__fadeIn">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img on onClick={() => setShowLogin(false)} src={assets.cross_icon} />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Your name' required />}
                    <input type='email' placeholder='Your email' required />
                    <input type='password' placeholder='Your password' required />
                </div>
                <button>{currentState === "sign up" ? "create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing , i agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account ? <span onClick={()=>setCurrentState("sign up")}> Click here</span> </p> :
                    <p>Already have an account ? <span onClick={()=>setCurrentState("Login")}>Login here </span></p>
                }
            </form>
        </div>
    )
}
