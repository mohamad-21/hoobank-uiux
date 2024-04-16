import styles from '../style'
import { google, apple, bill } from '../assets';

const Billing = () => {
  return (
    <section className={`flex md:items-center items-start md:flex-row flex-col-reverse justify-between gap-12 relative ${styles.paddingY}`} id="product">
      <div className="flex-1">
        <img src={bill} alt="billing" className="relative w-full h-full max-w-lg" />
      </div>
      <div className="absolute top-0 -left-1/2 w-1/2 h-1/2 white__gradient z-[2] rounded-full" />
      <div className="absolute bottom-0 -left-1/2 w-1/2 h-1/3 pink__gradient z-[1] rounded-full" />
      <div className="flex-1 flex flex-col gap-4">
        <h2 className={styles.heading2}>Easily control your billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-md`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex items-center gap-4">
          <button>
            <img src={google} alt="google" />
          </button>
          <button>
            <img src={apple} alt="apple" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Billing