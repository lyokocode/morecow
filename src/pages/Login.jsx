import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye, AiFillFacebook } from "react-icons/ai"
import "styles/loginPage.scss"

const Login = () => {


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("password")

    const enable = userName && password

    const submitHandle = (e) => {
        e.preventDefault()
        console.log(password);
        if (userName === password) {
            alert("naptın aq");
        }
    }

    const showHandle = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    return (
        <section className='login-container'>
            <div className='login-content'>
                <a href='https://github.com/lyokocode' target="_blank" className='logo'>

                    <img src='images/aelita.png' />
                </a>
                <form onSubmit={submitHandle} className='login-form'>
                    <label >
                        <input value={userName} onChange={e => setUserName(e.target.value)} placeholder='Phone Number, username or email' />
                    </label>
                    <label>
                        <input type={type} value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />

                        {
                            password && (
                                <div onClick={showHandle} className='show-hide'> {type === "text" ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</div>

                            )
                        }

                    </label>
                    <button className='login-btn' disabled={!enable} type='submit'>Log In</button>
                    <div className='or'>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </div>
                    <a href='#' className='login-with-facebook'>
                        <AiFillFacebook size={28} />
                        Log In with Facebook
                    </a>
                    <a href='#' className='forgot-password'> forgot password?</a>
                </form>
                <div className='dont-account'>
                    Don't have an account? <a href='#'>Sign up</a>
                </div>
            </div>
        </section>
    )
}

export default Login