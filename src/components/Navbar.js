import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
      <nav className={`navbar ${styles.navContainer}`}>
        <a className="navbar-brand" href="/">
          <Image
            src="/desktop-logo.svg"
            alt="Thrift Ops Logo"
            width={97}
            height={97}
            priority
            className={styles.desktoplogo}
          />
          <Image
            src="/mobile-logo.svg"
            alt="Thrift Ops Logo"
            width={146}
            height={55}
            priority
            className={styles.mobilelogo}
          />
        </a>
        
        <button type="button" className={`${styles.navbtn} btn btn-outline-danger`} ><a className={styles.link} href='#form'> Start Listing Now</a></button>
      </nav>
   
  )
}

export default Navbar
