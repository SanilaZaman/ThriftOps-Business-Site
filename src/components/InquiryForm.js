"use client"
import React from 'react'
import styles from './InquiryForm.module.css'
import FormHeader from './FormHeader'
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>

const InquiryForm = () => {
  const [isActive, setIsActive] = useState(false);

  const showToast = () => {
    return (
      toast.success('Form Submission Successful',{
        position: "top-center",
      })
    )
  }
  const handleClick = () => {
      setIsActive(current => !current);
      setTimeout(() => {
          setIsActive(current => !current);
        }, 1500);
  };
  return (
    
    <div id="form" className={`${styles.formContainer}`}>
      <FormHeader/>
      <div>
        <div class="row align-items-stretch no-gutters contact-wrap">
          <div class="col-md-12">
            <div class="form h-100">
            {/* https://getform.io/f/9bb6647a-a85e-4383-b817-7db90155c917 */}
              <form class="mb-5" method="post" id="contactForm" name="contactForm" action="https://postend.vercel.app/n/gAAAAABktOHk_THGLiUMDAkPViko_RDkiQowgrp7Ex9s7jI7jySAr0i3JQoyhe-1IKZsUeKNR6fyaGkixKuT0R7RSmhcT9LIRi-ymr8v2zVpzCD7ZPF_QxYZDrNcUK7ZpTJ4Ums0RNK-ZOomASZ-pPnl7j9tGdG3cyrq5KvDmJKz9pvWsLAz1_eh-aFZt1j5QAt4n3LtnI_b" target="hiddenFrame" onSubmit={showToast}>
                <div class="row">
                  {/* Name */}
                  <div class="col-md-6 form-group mb-3">
                    <label for="" className={`${styles.labels} col-form-label`} >Name *</label>
                    <input type="text" className={`${styles.formInput} form-control`} name="Name" id="name" placeholder="Your name" required />
                  </div>
                  {/* Email */}
                  <div class="col-md-6 form-group mb-3">
                    <label for="" className={`${styles.labels} col-form-label`} required >Email *</label>
                    <input type="email" className={`${styles.formInput} form-control`}  name="Email" id="email"  placeholder="Your email" required />
                  </div>
                </div>

                <div class="row">
                  {/* Company */}
                  <div class="col-md-6 form-group mb-3">
                    <label className={`${styles.labels} col-form-label`}>Phone </label>
                    <input  type="text"  name="Company"  className={`${styles.formInput} form-control`} placeholder="Your phone"/>
                  </div>
                  {/* Needed services */}
                  <div class="col-md-6 form-group mb-3">
                    <label for="services" className={`${styles.labels} col-form-label`} >Store Type *</label>
                    <select name='Needed Services' className={`${styles.formInput} form-control form-select`}  placeholder="Password" required>
                      <option>Reseller</option>
                      <option>Vintage Store</option>
                      <option>Thrift Store</option>
                      <option>Charity Store</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                   <div height="200px"></div>
                {/* Message */
               /* <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label className={`${styles.labels} col-form-label`} >Message *</label>
                    <textarea  className={`${styles.formInput} form-control`} name="Message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                  </div>
                </div>*/}
                <div class="row">
                  <div class="col-md-12 form-group">
                  <div className={styles.parent}>
                    <a className={styles.hatImg}  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/aliafzal-9c2h/30min'});return false;" >
                    <input type="image" src="/hat.svg" alt="Submit" width="103" height="64" className={styles.hatImg} style={{transform: isActive ? 'scaleY(0.5)' : null}} onClick={handleClick}/> 
                    </a>
                  {/* To not redirect to quickforms page */}
                    <iframe name="hiddenFrame" width="0" height="0" border="0" className={styles.vis} ></iframe>
                    <input type="submit" className={styles.btnblack} value="Start listing now!" />
                 
                  <ToastContainer />
                 
                  </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InquiryForm
