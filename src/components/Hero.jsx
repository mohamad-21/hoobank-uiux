import styles from '../style';
import { discount, robot } from '../assets';
import { GetStarted } from './index';

const Hero = () => {
  return (
    <section className={`flex flex-col md:flex-row gap-12 ${styles.paddingY}`} id="home">

      <div className={`flex-1 ${styles.flexStart} ${styles.paddingX} xl:px-0 flex-col gap-6`}>
        <div className={`${styles.flexCenter} gap-1.5 bg-discount-gradient p-3 rounded-lg`}>
          <img src={discount} className="w-[32px] h-[32px]" alt="discount" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="flex flex-col">
          <div className={`flex items-center gap-12 w-full max-w-lg`}>
            <h1 className="flex flex-col text-[50px] leading-[65px] sm:text-[60px] sm:leading-[75px] font-semibold">
              The Next <br className="sm:block hidden" /> 
            <span className="text-gradient">Generation</span>
            </h1>
            <div className="ss:flex hidden">
              <GetStarted />
            </div>
          </div>
          <h1 className="text-[50px] leading-[65px] sm:text-[60px] sm:leading-[75px] font-semibold">
            Payment Method
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-md`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>

      <div className="flex-1 flex items-center justify-end relative">
        <img src={robot} alt="robot" className="w-full h-full relative z-5 max-w-md" />
        <div className="absolute top-0 w-[40%] h-[35%] pink__gradient z-0" />
        <div className="absolute top-0 w-[70%] h-[60%] white__gradient z-[1]" />
        <div className="absolute top-0 right-20 w-[50%] h-[50%] blue__gradient z-0" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero