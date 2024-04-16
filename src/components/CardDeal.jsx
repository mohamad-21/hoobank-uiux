import styles from '../style';
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => {
  return (
    <section className={`flex md:flex-row flex-col md:items-center justify-between gap-12 ${styles.paddingY}`}>
      <div className="flex flex-1 flex-col items-start gap-4">
        <h2 className={styles.heading2}>Find a better card deal in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-md`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button>Get Started</Button>
      </div>
      <div className="flex-1">
        <img src={card} alt="deal" className="w-full h-full max-w-lg" />
      </div>
    </section>
  )
}

export default CardDeal