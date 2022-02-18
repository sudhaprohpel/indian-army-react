import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import Navbar from '../Navbar/Navbar'
import { GoHome } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import { HiOutlineDocumentDuplicate, HiOutlineDocumentAdd } from 'react-icons/hi'
import Homepage from '../Homepage/Homepage'
import PersonList from '../PersonList/PersonList'
import AddPersonal from '../AddPersonal/AddPersonal'
import FormsList from '../FormsList/FormsList'
import AddNewForm from '../AddNewForm/AddNewForm'

const Dashboard = ({ userName, logoutUser }) => {
    const [homePage, setHomePage] = useState(true)
    const [personalList, setPersonalList] = useState(false)
    const [addPersonal, setAddPersonal] = useState(false)
    const [formsList, setFormsList] = useState(false)
    const [addForm, setAddForm] = useState(false)


    function handleHome(){
        setHomePage(true)
        setPersonalList(false)
        setAddPersonal(false)
        setFormsList(false)
        setAddForm(false)
    }

    function handlePersonalList(){
        setHomePage(false)
        setPersonalList(true)
        setAddPersonal(false)
        setFormsList(false)
        setAddForm(false)
    }

    function handleAddPersonal(){
        setHomePage(false)
        setPersonalList(false)
        setAddPersonal(true)
        setFormsList(false)
        setAddForm(false)
    }

    function handleFormsList(){
        setHomePage(false)
        setPersonalList(false)
        setAddPersonal(false)
        setFormsList(true)
        setAddForm(false)
    }

    function handleAddNewForm(){
        setHomePage(false)
        setPersonalList(false)
        setAddPersonal(false)
        setFormsList(false)
        setAddForm(true)
    }
    

    return (
        <div className={styles.dashboard_main_container}>
            <Navbar userName={userName} logoutUser={logoutUser} />
            <div className={styles.dashboard_content_container}>
                <div className={styles.sidebar_links_container}>
                    <div
                        className={styles.active_link}
                        onClick={() => handleHome()}
                    >
                        <div className={styles.link_icon}><GoHome /></div>
                        <div className={styles.link_text}>Home</div>
                    </div>
                    <div
                        className={styles.link_container}
                        onClick={() => handlePersonalList()}
                    >
                        <div className={styles.link_icon}><FiUsers /></div>
                        <div className={styles.link_text}>Personal List</div>
                    </div>
                    <div
                        className={styles.link_container}
                        onClick={() => handleAddPersonal()}
                    >
                        <div className={styles.link_icon}><FiUserPlus /></div>
                        <div className={styles.link_text}>Add new personal</div>
                    </div>
                    <div
                        className={styles.link_container}
                        onClick={() => handleFormsList()}
                    >
                        <div className={styles.link_icon}><HiOutlineDocumentDuplicate /></div>
                        <div className={styles.link_text}>Forms List</div>
                    </div>
                    <div
                        className={styles.link_container}
                        onClick={() => handleAddNewForm()}
                    >
                        <div className={styles.link_icon}><HiOutlineDocumentAdd /></div>
                        <div className={styles.link_text}>Add new form</div>
                    </div>
                </div>
                <div className={styles.dashboard_right_container}>
                    {homePage && <Homepage/>}
                    {personalList && <PersonList/>}
                    {addPersonal && <AddPersonal/>}
                    {formsList && <FormsList/>}
                    {addForm && <AddNewForm/>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;