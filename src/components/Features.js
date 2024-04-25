"use client"
import React from 'react'
import styles from './Features.module.css'
import Image  from 'next/image'
import { useInView } from "framer-motion";
import { useRef } from "react"

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className={styles.mainContainer} ref={ref}>
            <div className={`${styles.heroContainer2} row`}>
                <div class="col-lg-3 d-none d-lg-block">
                    <div className={styles.shirtImgs}>
                    <Image
                        src="/shirtwithshadow.svg"
                        alt="Shadow"
                        width={205}
                        height={421}
                        className={styles.heroshirt_shadow}
                        priority 
                    />
                    </div>
                </div>
                <div class="col " >
                    <ul className={isInView? styles.heroInfolist: styles.space}>
                        <li><b>Effortless Listing:</b> Upload and manage thrift store inventory with ease.</li>
                        <li><b>For All Sellers:</b> User-friendly platform caters to all experience levels.</li>
                        <li><b>Maximized Sales Potential:</b> List hundreds of products daily and focus on growth.</li>
                        <li><b>Seize Opportunities:</b> Unlock full inventory potential and stay competitive.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features

