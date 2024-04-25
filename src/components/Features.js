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
                        <li>Effortless Listing: Say goodbye to manual listing headaches. ThriftOps streamlines the process, making it easier than ever to upload and manage your thrift store inventory.</li>
                        <li>Advanced barcode processes for efficient tracking </li>
                        <li>Streamlined uploading and organisation of products</li>
                        <li>Timely dispatch of goods for efficient operations</li>
                        <li>Excellent customer service for your business </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features

