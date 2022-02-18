import React, { useState } from 'react'
import styles from './AddPersonal.module.css'
import {FiUserPlus} from 'react-icons/fi'

const AddPersonal = () => {
    return (
        <div className={styles.addperson_main_container}>
            <div className={styles.addperson_container}>
                <FiUserPlus className={styles.icon_container}/>
                <h2>Add new personal details</h2>
                <p>Browser from local device</p>
                <input type="file"></input>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default AddPersonal;