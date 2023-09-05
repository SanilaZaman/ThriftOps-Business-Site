"use client"
import React from 'react'
import styles from './InfoSection.module.css'
import Image  from 'next/image'
import { useMediaQuery } from 'react-responsive';
import {motion, useScroll,  useTransform, useAnimation, useInView} from "framer-motion"

const InfoSection =  ({ formRef }) => {
  const { scrollYProgress } = useScroll()
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  const opacAnim_d = useTransform(scrollYProgress, [0.39, 0.42], [1, 0])
  const opacAnim_m= useTransform(scrollYProgress, [0.47 , 0.49], [1, 0])
  // also for 3rd to 4th anim
  const visibleAnim_d = useTransform(scrollYProgress, [0.39, 0.42, 0.48, 0.5], [0,1, 1, 0])
  const visibleAnim_m = useTransform(scrollYProgress, [0.47, 0.49, 0.55, 0.57], [0,1, 1, 0])

  // 2nd and 3rd Anim ( 0.39 - 0.42 And 0.44 - 0.46 )
  const shoevisAnim_d = useTransform(scrollYProgress, [0.39, 0.42], [0,1])
  const shoevisAnim_m = useTransform(scrollYProgress, [0.47, 0.49], [0,1])
  const xPosAnim_d = useTransform(scrollYProgress, [0.39, 0.42,0.44, 0.46, 0.49], [0, -150,-150, -300, -300])
  const yPosAnim_d = useTransform(scrollYProgress, [0.39, 0.42, 0.49], [0, 80, 80])
  const xPosAnim_m = useTransform(scrollYProgress, [0.47, 0.49, 0.51, 0.53, 0.55, 0.57], [0, -150,-150, -150,-150, -220 ])
  const yPosAnim_m = useTransform(scrollYProgress, [0.47, 0.49, 0.51, 0.53], [0, 80, 80, -30])

  // 3rd Anim ( 0.44 - 0.46 )
  const linesVis_d = useTransform(scrollYProgress, [0.39, 0.42,0.44, 0.46], [0,0, 0,1])
  const liveBtnVis_d = useTransform(scrollYProgress, [0.39, 0.42,0.44, 0.46, 0.5], [0,0, 0,1,0])
  const linesVis_m = useTransform(scrollYProgress, [0.47, 0.49,0.51, 0.53], [0,0, 0,1])
  const liveBtnVis_m = useTransform(scrollYProgress, [0.47, 0.49,0.51, 0.53, 0.55, 0.57], [0,0, 0,1,1,0])

  const rectInc = useTransform(scrollYProgress, [0.44, 0.46], [650,758])
  // const topRectxAnim = useTransform(scrollYProgress, [0.44, 0.46], [0,300])

  // 3rd Anim ( 0.44 - 0.5 )
  const visAnim_m = useTransform(scrollYProgress, [0.4,0.47, 0.55, 0.57], [0,0,0,1])
  const visAnim_d = useTransform(scrollYProgress, [0.48, 0.5], [0,1])
  const btmRectxAnim = useTransform(scrollYProgress, [0.48, 0.5], [0,-680])
  const btmRectyAnim = useTransform(scrollYProgress, [0.48, 0.5], [0,50])
  const btmRectWidthAnim = useTransform(scrollYProgress, [0.48, 0.5], [406,361])
  const liveBtnRedVis_d = useTransform(scrollYProgress, [0.39, 0.42,0.44, 0.48, 0.5], [0,0, 0,0,1])
  const liveBtnRedVis_m = useTransform(scrollYProgress, [0.4,0.47, 0.49,0.51, 0.53, 0.55, 0.57], [0,0,0, 0,0,0,1])
  const moveLeft_m = useTransform(scrollYProgress, [0.55, 0.57], [0,-70])

  const features = [
    { title: 'Inventory management', desc: <p> Inventory Management: Efficiently manage recommerce orders with <span className={styles.bold}> individual barcode assignments</span>  and streamlined warehousing of your 1/1 inventory. </p> },
    { title: 'Automated Pricing & Description', desc: <p> <span className={styles.bold}> Get pricing and description suggestions </span> for your items powered by an AI model trained on over <span className={styles.bold}> 300,000 data points.</span> </p> },
    { title: 'Integrated Active Enlisting', desc: <p> List and sell products easily on  <span className={styles.bold}> multiple ecommerce platforms </span> with our inventory management&apos;s integrated active enlisting, allowing <span className={styles.bold}> one-click listings on various channels. </span> </p> }
  ]

  return (
    <div> 
      <div className={styles.infoContainer}>
        <Image
          src="/thriftops_text_desktop.svg"
          alt="The ThripsOps Magic"
          width={1117}
          height={122}
          className={styles.infoHeader}  
        />
        <Image
          src="/thriftops_text_mobile.svg"
          alt="The ThripsOps Magic"
          width={0}
          height={0}
          className={styles.infoHeaderMobile}  
        />
        <motion.div  className={styles.infoRect} style={{width: isMobile? 650: rectInc}}>
        {/* <div > */}
            {/* 2 */}
            <motion.div className={styles.infotopbox1} style={{opacity: isMobile? opacAnim_m: opacAnim_d}}> {features[0].title}</motion.div>
            <motion.div className={styles.infobottombox1} style={{opacity: isMobile? opacAnim_m: opacAnim_d}}>{features[0].desc} </motion.div>
            <motion.div style={{opacity: isMobile? opacAnim_m: opacAnim_d}}>
              <Image
                src="/shoes_1.svg"
                alt="Shoes"
                width={265}
                height={182}
                className={styles.infoShoes} 
              />
              
              <Image
                src="/arrow_barcode.svg"
                alt="Barcode"
                width={170}
                height={118}
                className={styles.infoArrow}  
              />
              </motion.div>

              {/* 2nd anim - shoe remains till end*/}
              <motion.div style={isMobile? {x: xPosAnim_m, y:yPosAnim_m, opacity: shoevisAnim_m}: {x: xPosAnim_d, y:yPosAnim_d, opacity: shoevisAnim_d}}>
                <Image
                src="/shoes_barcode.png"
                alt="Barcode"
                width={307}
                height={191}
                className={styles.infoShoes2}  
                />
              </motion.div>

              {/* 3rd anim */}
              <motion.div style={ isMobile? {opacity:linesVis_m  , x: moveLeft_m}: {opacity: linesVis_d }} >
                <Image
                  src="/vector_lines.svg"
                  alt="Lines"
                  width={220}
                  height={91.5}
                  className={styles.infoLines}  
                />
                </motion.div>

              <motion.div style={ isMobile? {opacity:liveBtnVis_m}: {opacity: liveBtnVis_d}} >
                <Image
                  src="/live_button.svg"
                  alt="Button"
                  width={143}
                  height={37}
                  className={styles.infoLiveButton}  
                />
              </motion.div>
              <motion.div style={ isMobile? {opacity:liveBtnRedVis_m, x: moveLeft_m}: {opacity: liveBtnRedVis_d}}  >
                <Image
                  src="/live_button_active.svg"
                  alt="Button"
                  width={143}
                  height={37}
                  className={styles.infoLiveButton}  
                />
              </motion.div>
            {/* </div> */}

            {/* 3 */}
            <motion.div className={styles.infotopbox2} style={{opacity: isMobile? visibleAnim_m : visibleAnim_d}} > {features[1].title}</motion.div>
            <motion.div className={styles.infobottombox2} style={{opacity: isMobile? visibleAnim_m : visibleAnim_d}} >{features[1].desc} </motion.div>

            {/* 4 */}
            <div>
            <motion.div className={styles.infotopbox2} style={{opacity: isMobile?  visAnim_m: visAnim_d}} > {features[2].title}</motion.div>
            <motion.div className={styles.infobottombox2} style={ isMobile? { opacity: visAnim_m}: {opacity: visAnim_d, x:btmRectxAnim, y:btmRectyAnim,  width:btmRectWidthAnim}} >{features[2].desc} </motion.div>
            <motion.div style={ isMobile? {opacity:liveBtnRedVis_m}: {opacity: liveBtnRedVis_d}}>
                <Image
                  src="/shopify_1.png"
                  alt="Shopify"
                  width={188}
                  height={143}
                  className={styles.infoshopify}  
                />
              </motion.div>
            <motion.div style={ isMobile? {opacity:liveBtnRedVis_m}: {opacity: liveBtnRedVis_d}} >
              <Image
                src="/amazon_2.png"
                alt="Amazon"
                width={186}
                height={100}
                className={styles.infoamazon}  
              />
            </motion.div>
            <motion.div  style={ isMobile? {opacity:liveBtnRedVis_m}: {opacity: liveBtnRedVis_d}}>
              <Image
                src="/ebay_3.png"
                alt="Ebay"
                width={182}
                height={120}
                className={styles.infoebay}  
              />
            </motion.div>
            </div>
        </motion.div>
        <a href='#form'>
        <Image
          src="circle_button.svg"
          alt="Book a Demo"
          width={159}
          height={159}
          className={styles.infoButton}
          />
        </a>
      </div>
    </div>
  )
}

export default InfoSection


//desktop
// 0.44 - 0.46 0.47-0.49 0.51 - 0.53
//// 0.55 - 0.57 0.59-0.61 0.63 - 0.65


//0.39 - 0.42,  0.44 - 0.46, 0.48-  0.49
// mobile
// 0.47 - 0.49  0.51 - 0.53 0.55 - 0.57