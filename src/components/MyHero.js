"use client"
import React from 'react'
import HatButton from './HatButton'
import styles from './MyHero.module.css'
import Image  from 'next/image'
const MyHero = () => {
  return (
    <div className={styles.hero}>
      {/* 1st container - Rack With Header */}
      <div class="row d-flex  flex-sm-row-reverse justify-content-between">
        <div class="col ms-auto">
          <div className={styles.desktopImgs}>
          <Image
            src="/rack.svg"
            alt="Show Rack Image"
            width={386}
            height={529}
            className={styles.heroRack}
            priority  
          />
           
          <Image
            src="/front_rack_railings.svg"
            alt="Front Rack Image"
            width={170}
            height={675}
            className={styles.heroRailings}
            priority  
          />
          <Image
            src="/tv.svg"
            alt="TV Image"
            width={200}
            height={243}
            className={styles.heroTV}
            priority  
          />
          
          <Image
            src="/vectortick.svg"
            alt="Tick Vector"
            width={77}
            height={59}
            className={styles.heroVector}
            priority  
          /> 

          <Image
            src="/shoes.svg"
            alt="Shoes"
            width={165}
            height={115}
            className={styles.heroStartShoes}
            priority  
          />
          </div>
        

          {/* for mobile view */}
          <Image
            src="/mobile-rack.svg"
            alt="Show Rack Image"
            width={329}
            height={410}
            className={styles.heroMobileRack}
            priority  
          />
          
        </div>
        <div class="col my-auto" >
          <div className={styles.heroText} >
            <h3 className={styles.heroHeader} >Effortless Listings for Thrift Sellers</h3>
            <p className={styles.heroDesc}>Increase Your Sales with ThriftOps&apos Seamless Listing Service</p>
          </div>
          <HatButton text={'Start Listing Now'} className={styles.heroHatBtn} />
        </div>
      </div>

    </div>

  )
}

export default MyHero



