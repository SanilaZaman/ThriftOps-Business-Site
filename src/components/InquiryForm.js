import React, { useState } from 'react';
import styles from './InquiryForm.module.css';
import FormHeader from './FormHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
  const [isActive, setIsActive] = useState(false);

  const showToast = () => {
    return toast.success('Form Submission Successful', {
      position: 'top-center',
    });
  };

  const handleClick = () => {
    setIsActive((current) => !current);
    setTimeout(() => {
      setIsActive((current) => !current);
    }, 1500);
  };

  const handleCalendlyClick = () => {
    // Initialize Calendly popup widget
    Calendly.initPopupWidget({ url: 'https://calendly.com/aliafzal-9c2h/30min' });
  };

  return (
    <div id="form" className={`${styles.formContainer}`}>
      <FormHeader />
      <div>
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div className="col-md-12">
            <div className="form h-100">
              <form className="mb-5" method="post" id="contactForm" name="contactForm" action="https://postend.vercel.app/n/gAAAAABktOHk_THGLiUMDAkPViko_RDkiQowgrp7Ex9s7jI7jySAr0i3JQoyhe-1IKZsUeKNR6fyaGkixKuT0R7RSmhcT9LIRi-ymr8v2zVpzCD7ZPF_QxYZDrNcUK7ZpTJ4Ums0RNK-ZOomASZ-pPnl7j9tGdG3cyrq5KvDmJKz9pvWsLAz1_eh-aFZt1j5QAt4n3LtnI_b" target="hiddenFrame" onSubmit={showToast}>
                <div className="row">
                  {/* Name */}
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="name" className={`${styles.labels} col-form-label`}>Name *</label>
                    <input type="text" className={`${styles.formInput} form-control`} name="Name" id="name" placeholder="Your name" required />
                  </div>
                  {/* Email */}
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="email" className={`${styles.labels} col-form-label`} required>Email *</label>
                    <input type="email" className={`${styles.formInput} form-control`} name="Email" id="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="row">
                  {/* Company */}
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="phone" className={`${styles.labels} col-form-label`}>Phone</label>
                    <input type="text" name="Company" className={`${styles.formInput} form-control`} placeholder="Your phone" />
                  </div>
                  {/* Needed services */}
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="services" className={`${styles.labels} col-form-label`}>Store Type *</label>
                    <select name="Needed Services" className={`${styles.formInput} form-control form-select`} placeholder="Password" required>
                      <option>Reseller</option>
                      <option>Vintage Store</option>
                      <option>Thrift Store</option>
                      <option>Charity Store</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div height="200px"></div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <div className={styles.parent}>
                      <a className={styles.hatImg} onClick={handleCalendlyClick}>
                        <input type="image" src="/hat.svg" alt="Submit" width="103" height="64" className={styles.hatImg} style={{ transform: isActive ? 'scaleY(0.5)' : null }} onClick={handleClick} />
                      </a>
                      <iframe name="hiddenFrame" width="0" height="0" border="0" className={styles.vis}></iframe>
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
  );
};

export default InquiryForm;
