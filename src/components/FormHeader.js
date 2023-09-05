import React from 'react'
import Image  from 'next/image'
import styles from './FormHeader.module.css'
import {motion, useScroll,  useTransform} from "framer-motion"

const FormHeader = () => {
  const { scrollYProgress } = useScroll()
  const xPosAnim = useTransform(scrollYProgress, [0.7,1], [0, 290])
  // const rotateAnim = useTransform(scrollYProgress, [0.7,1], [0, 360])
  return (
        <div class="row d-flex justify-content-between">
            <div  className={`${styles.formHeader} col-lg-8`}>
              Say goodbye to thrift inventory woes - Schedule your Demo today!
            </div>
            <div className={`${styles.shirtSec} col-lg-4 d-none d-lg-flex`}>
              <motion.div  style={{x: xPosAnim}} >
              <Image
                src="/folded-shirt.svg"
                alt="Folded shirt"
                width={181}
                height={148}
                priority   
                className={styles.foldedshirt}
              />
              </motion.div>

              <Image
                src="/box-outer.svg"
                alt="Open Box"
                width={201}
                height={190}
                priority   
                className={styles.openbox}
              />

              <Image
                src="/box-bottom.svg"
                alt="Open Box"
                width={217}
                height={178.5}
                priority   
                className={styles.openboxcover}
              />

              <Image
                src="/spinning-arrows.svg"
                alt="Arrows"
                width={51}
                height={52}
                priority   
                className={styles.arrows}
                />

            {/* <motion.div className={styles.divv} animate={{rotate:360}} style={{originY: 0, originX:0}} transition={{ duration: 3}}> 
              <Image
                src="/left-spin.svg"
                alt="Arrows"
                width={51}
                height={52}
                priority   
                className={styles.arrow1}
              />
              </motion.div> */}

              {/* <motion.div className={styles.divv} animate={{rotate:[180,360]}} styles={{originY: 0}} transition={{ duration: 3}} >
              <Image
                src="/right-spin.svg"
                alt="Arrows"
                width={51}
                height={52}
                priority   
                className={styles.arrow2}
              />
              </motion.div> */}

            </div>
        </div>
   
  )
}

export default FormHeader