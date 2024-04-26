import styles from './page.module.css'
import Navbar from '../components/Navbar'
import MyHero from '@/components/MyHero'
import InquiryForm from '@/components/InquiryForm'
import Footer from '@/components/Footer'
import InfoSection from '@/components/InfoSection'
import FeaturesSection from '@/components/FeaturesSection'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features';

import Loading from './loading';
export default function Home() {
  return (    
    <main className={styles.main}>
      {/* <Suspense fallback={<Loading/>} > */}      
      <Navbar/>
      <MyHero />
      <Features />
      <InfoSection/>
      <FeaturesSection />
    <FeaturesSection />
      <InquiryForm />
      <Footer />
      {/* </Suspense> */}
   
    </main>
  )
}

