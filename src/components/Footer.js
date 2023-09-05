import React from 'react'
import {FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import Image  from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={` ${styles.footerContainer}`}>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div class="col-md-4 d-flex align-items-center d-none d-lg-block ">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <Image
              src="/desktop-footerlogo.svg"
              alt="Thrift Ops Logo"
              width={89}
              height={89}
              priority
              className={styles.footerLogo}
            />
          </a>
        </div>

        {/* social media icons */}
        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-muted" href="#"><FiInstagram color='#FB2D2D' size={24} className={styles.hoverIcon}/></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><FiFacebook  color='#FB2D2D' size={24} className={styles.hoverIcon}/></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><FiTwitter   color='#FB2D2D' size={24} className={styles.hoverIcon}/></a></li>
        </ul> */}
      </footer>
    </div>


  )
}

export default Footer