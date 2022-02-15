import React, { useState } from 'react';
import styles from './Landing.module.css'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

const Landing = () => {
    const [loginTabClicked, setLoginTabClicked] = useState(false)
    const [signTabClicked, setSignTabClicked] = useState(false)

    function handleLoginClick() {
        console.log('login clicked')
        setLoginTabClicked(true)
        setSignTabClicked(false)
    }

    function handleSignupClick() {
        console.log('signup clicked')
        setLoginTabClicked(false)
        setSignTabClicked(true)
    }

    return (
        <div className={styles.landing_main_container}>
            <div className={styles.login_signup_container}>
                <ul>
                    <li
                        className={loginTabClicked ? `${styles.login_signup_active_link}` : ''}
                        onClick={(e) => handleLoginClick()}
                    >
                        Login</li>
                    <li
                        className={signTabClicked ? `${styles.login_signup_active_link}` : ''}
                        onClick={() => handleSignupClick()}
                    >
                        Signup</li>
                </ul>
                {
                    loginTabClicked &&
                    (
                        <Login />
                    )
                }

                {
                    signTabClicked &&
                    (
                        <Signup />
                    )
                }
            </div>
        </div>
    )
}

export default Landing;