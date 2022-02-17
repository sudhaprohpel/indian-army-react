import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Navbar = ({ userName, logoutUser }) => {
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <div className={styles.navbar_main_container}>
            <div className={styles.name_image_container}>
                {userName[0]}
            </div>
            <p>{userName}</p>
            <div className={styles.dropdown_arrow_container} onClick={() => setIsDropdown(!isDropdown)}>
                {isDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isDropdown &&
                <div className={styles.navbar_dropdown}>
                    <li className={styles.reset_password}>Reset Password</li>
                    <li className={styles.logout} onClick={() => logoutUser(true)}>Logout</li>
                </div>
            }
        </div>
    )
}

export default Navbar;