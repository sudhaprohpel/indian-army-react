import React, { useState } from 'react';
import styles from './Signup.module.css';
import { MdDriveFileRenameOutline, MdOutlineAlternateEmail } from 'react-icons/md'
import { BsKey } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    function handleSignupInputs() {
        console.log(fullName, userName, userPassword)
        axios.post('http://localhost:4000/register-user', {
            fullName: fullName,
            userName: userName,
            userPassword: userPassword
        })
        .then(res => console.log(res.data))
    }

    return (
        <div className={styles.signup_main_container}>
            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <MdDriveFileRenameOutline />
                </div>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Set your full name"
                />
            </div>

            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <MdOutlineAlternateEmail />
                </div>
                <input
                    type="text"
                    placeholder="Set your username"
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
                    placeholder="Set your password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <div className={styles.image_container} onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                    }
                </div>
            </div>

            <div className={styles.signup_button}>
                <button onClick={handleSignupInputs}>Signup</button>
            </div>

        </div>
    )
}

export default Signup;