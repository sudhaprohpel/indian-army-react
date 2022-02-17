import React, { useState } from 'react';
import loginStyle from './Login.module.css'
import styles from '../Signup/Signup.module.css'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsKey } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios'

const Login = ({isUserRegistered, getuserName}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleLoginInputs() {
        // axios.get('http://localhost:4000/login-user', {
        //     userName: userName,
        //     password: password
        // })
        //     .then(res => console.log(res.data))

        if(userName && password){
            getuserName(userName)
            isUserRegistered(true)
        }
    }

    return (
        <div className={styles.login_main_container}>
            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <MdOutlineAlternateEmail />
                </div>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <BsKey />
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.image_container} onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                    }
                </div>
            </div>

            <div className={loginStyle.login_options_container}>
                <div className={loginStyle.remember_me}>
                    <input type="checkbox" />
                    Remember me
                </div>
                <div className={loginStyle.forget_password}><a href="#">Forgot your password?</a></div>
            </div>

            <div className={styles.signup_button}>
                <button onClick={handleLoginInputs}>Login</button>
            </div>
        </div>
    )
}

export default Login;