import React from 'react'
import styles from './TestimonialCard.module.css'
import Image  from 'next/image'

const TestimonialCard = () => {
  return (
    <div>
        <div className={`${styles.cardContainer} card`}>
            <div class="card-body">
                <p class='mb-5'>I never realised how much easier it could be to sell our thrift store items until we started using this solution. The automatic pricing suggestions are amazing and the warehouse system is so easy to use!</p>
                <Image
                    src="/person1.png"
                    alt="Person1"
                    width={220}
                    height={84}
                    priority
                    
                />
               
            </div>
        </div>
    </div>


  )
}

export default TestimonialCard