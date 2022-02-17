import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import Navbar from '../Navbar/Navbar'
import { GoHome } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import { HiOutlineDocumentDuplicate, HiOutlineDocumentAdd } from 'react-icons/hi'

const Dashboard = ({ userName, logoutUser }) => {
    return (
        <div className={styles.dashboard_main_container}>
            <Navbar userName={userName} logoutUser={logoutUser}/>
            <div className={styles.dashboard_right_container}>
                <div className={styles.sidebar_links_container}>
                    <div className={styles.active_link}>
                        <div className={styles.link_icon}><GoHome /></div>
                        <div className={styles.link_text}>Home</div>
                    </div>
                    <div className={styles.link_container}>
                        <div className={styles.link_icon}><FiUsers /></div>
                        <div className={styles.link_text}>Personal List</div>
                    </div>
                    <div className={styles.link_container}>
                        <div className={styles.link_icon}><FiUserPlus /></div>
                        <div className={styles.link_text}>Add new personal</div>
                    </div>
                    <div className={styles.link_container}>
                        <div className={styles.link_icon}><HiOutlineDocumentDuplicate /></div>
                        <div className={styles.link_text}>Forms List</div>
                    </div>
                    <div className={styles.link_container}>
                        <div className={styles.link_icon}><HiOutlineDocumentAdd /></div>
                        <div className={styles.link_text}>Add new form</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;