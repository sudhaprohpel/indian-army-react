import React, {useState} from 'react';
import loginStyle from './Login.module.css'
import styles from '../Signup/Signup.module.css'
import {AiOutlineUser} from 'react-icons/ai'
import {MdDriveFileRenameOutline, MdOutlineAlternateEmail} from 'react-icons/md'
import {BsKey} from 'react-icons/bs'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={styles.login_main_container}>
            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <MdOutlineAlternateEmail/>
                </div>
                <input type="text" placeholder="Enter your username"/>
            </div>

            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <BsKey/>
                </div>
                <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password"/>
                <div className={styles.image_container} onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                    }
                </div>
            </div>

            <div className={loginStyle.login_options_container}>
                <div className={loginStyle.remember_me}>
                    <input type="checkbox"/>
                    Remember me
                </div>
                <div className={loginStyle.forget_password}><a href="#">Forgot your password?</a></div>
            </div>

            <div className={styles.signup_button}>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;