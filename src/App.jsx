import { useEffect, useState } from "react";
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from './components/index';
import styles from './style';

function App() {

  const [navBg, setNavBg] = useState('transparent');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 0) {
        setNavBg('bg-primary/60');
      }
      else {
        setNavBg('transparent');
      }
    });
  }, []);

  return (
    <div className="bg-primary text-white w-full">
      <div className={`${styles.flexCenter} ${styles.paddingX} sticky top-0 left-0 ${navBg} backdrop-blur-md z-20`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
