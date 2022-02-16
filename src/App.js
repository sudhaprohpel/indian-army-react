import styles from './App.module.css';
import React, { useState } from 'react'
import Landing from './Components/Landing/Landing'

const App = () => {
  return (
    <div className={styles.app_main_container}>
      <Landing/>
    </div>
  )
}

export default App;