import React, {useState} from 'react';
import styles from './Signup.module.css';
import {MdDriveFileRenameOutline, MdOutlineAlternateEmail} from 'react-icons/md'
import {BsKey} from 'react-icons/bs'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={styles.signup_main_container}>
            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <MdDriveFileRenameOutline/>
                </div>
                <input type="text" placeholder="Set your full name"/>
            </div>

            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <MdOutlineAlternateEmail/>
                </div>
                <input type="text" placeholder="Set your username"/>
            </div>

            <div className={styles.input_container}>
                <div className={styles.image_container}>
                    <BsKey/>
                </div>
                <input type={showPassword ? 'text' : 'password'} placeholder="Set your password"/>
                <div className={styles.image_container} onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
                    }
                </div>
            </div>

            <div className={styles.signup_button}>
                <button>Signup</button>
            </div>

        </div>
    )
}

export default Signup;