import React from 'react'
import Image from 'next/image'
import styles from './HatButton.module.css'
import { useState } from 'react'

const HatButton = ({ text }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
        setTimeout(() => {
            setIsActive(current => !current);
          }, 2000);
    };
    
    return (
    <div className={styles.parent} >
        <a className={styles.hatImg} href="javascript:setTimeout(()=>{window.location = '#form' },500);" >
        <Image
            src="/hat.svg"
            alt="Hat Logo"
            width={103}
            height={64}
            className={styles.hatImg}
            priority
            style={{
                transform: isActive ? 'scaleY(0.5)' : null,
              }}
            onClick={handleClick}
        />
        </a>
        {/* <a type="image" src="/hat.svg" width="103" height="64" className={styles.hatImg} /> */}
        <a className={styles.btnblack} href='#form'>{text}</a> 
    </div>
)
}

export default HatButton