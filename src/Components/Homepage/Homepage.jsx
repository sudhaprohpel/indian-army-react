import React, { useState } from 'react'
import styles from './Homepage.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

const Homepage = () => {
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <div className={styles.homepage_main_container}>
            <h1>Fill a form</h1>
            <div className={styles.homepage_upper_container}>
                <div className={styles.search_form_container}>
                    <div className={styles.search_input}>
                        <input type="text" placeholder="Select form" />
                    </div>
                    <div className={styles.icon_container} onClick={() => setIsDropdown(!isDropdown)}>
                        {isDropdown ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                </div>
                <div className={styles.search_name_container}>
                    <div className={styles.icon_container}>
                        <BiSearch />
                    </div>
                    <div className={styles.search_input}>
                        <input type="text" placeholder="Search name/credentials" />
                    </div>
                </div>
                <button >Fill form</button>
            </div>
        </div>
    )
}

export default Homepage