"use client"
import React from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useState} from "react";
import styles from './FeaturesSection.module.css'
import Image  from 'next/image'

const FeaturesSection = () => {
  const [clicked, setClicked] = useState(false);
  const listOfFeatures = [
    {feature: 'Accurate Product Barcoding',    description: 'ThriftOps provides an advanced barcode process to ensure items are accurately tagged in the system without any leakages or inventory lost, reducing outages, and providing optimal service.' },
    {feature: 'Efficient Product Photography',  description: 'One Photo Station with 2 resources has the capacity to produce 150 Products per day, with 2 editors to process all products based on a preset template.'},
    {feature: 'Streamlined Product Uploading', description: 'Thrift Ops has built a unique product uploading page with an auto description generation, auto pricing suggestions, and multiple platform pushing capability (Shopify, eBay, Depop)' },
    {feature: 'Organized Warehouse Allocation', description: "Efficiently scale your circular fashion business with ThriftOps' streamlined warehouse management system, eliminating the challenge of finding and managing inventory on shelves."},
    {feature: 'High-quality Product Picking & Packing', description: "Thrift Ops provides high-quality packaging, ensuring the timely dispatch of goods to customers with a higher level of protection than common shipping methods."},
    {feature:'Integrated Picking Screen for Pickers ', description: "Stay up-to-date on your order status with ThriftOps' integrated shipping partners. Track your order in real-time, ensuring timely delivery and customer satisfaction." },
    {feature: 'Simplified Order Tracking', description: "Thrift Ops tracks orders as they happen, provides instant feedback from customers, and confirms shipment statuses easily with one click, increasing customer satisfaction."},
    {feature: 'Hassle-free After Sale & Technical Support', description: "Thrift Ops provides 24/7 customer support, easy return policy to ensure smooth customer service and consistent sales."}
  ]
  
  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className={styles.mainContainer}  >
      <div class="row">
      <div class="col-lg-6">
        <div>
          <p className={styles.mainHeading} > All packed inside an Easy Interface</p>
          <p className={styles.rectangle}></p>

        </div>

        <div className={styles.accordiansection}>
          <div className={styles.sec}>
            {listOfFeatures.map((item, index) => {
          
            return (
              <div key={index}>
                <div className={styles.wrap} onClick={() => toggle(index)} key={index} >
                  <p className={styles.heading} >{item.feature}</p>
                  <span className={styles.symbols}>{clicked === index ?'-': '+'}</span>
                </div>

                {clicked === index ? (
                  <div className={styles.panel}>
                    <p className={styles.text}>{item.description}</p>
                    </div>
                ) : null}
                
              </div>
            );
            })}
        
          </div>
        </div>

      </div>
      <div class="d-none d-lg-flex col-lg-6 ms-auto">
        <Image
          src="/laptopimg.png"
          alt="Side Picture"
          width={595}
          height={452}
          className={styles.laptopImg}   
        />
      </div>

      </div>
    </div>
  )
}

export default FeaturesSection



