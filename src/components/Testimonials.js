import React from 'react'
import TestimonialCard from './TestimonialCard'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <div className={`${styles.testimContainer}`}>

        <div>
            <p className={`${styles.testimHeading} col-sm-12`}> Hear it from the users. </p>

            <div className={`${styles.cards}`}>
                <div class='col-sm-3'>
                    <TestimonialCard/>
                </div>
                <div class='col-sm-3'>
                    <TestimonialCard/>
                </div>
                <div class='col-sm-3'>
                    <TestimonialCard/>
                </div>
                <div class='col-sm-3'>
                    <TestimonialCard/>
                </div>
            </div>
           
        </div>

    </div>

  
  )
}

export default Testimonials