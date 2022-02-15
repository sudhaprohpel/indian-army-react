import React from 'react';
import styles from './Login.module.css'
import {AiOutlineUser} from 'react-icons/ai'

const Login = () => {
    return (
        <div className={styles.login_main_container}>
            <div className={styles.input_container}>
                {/* <div  */}
                <AiOutlineUser/>
            </div>
            <div className={styles.input_container}></div>
        </div>
    )
}

export default Login;