import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.padding} bg-black-gradient-2 rounded-2xl flex items-center justify-between flex-wrap gap-8 ${styles.marginY}`}>
      <div className="flex flex-col gap-2">
        <h1 className={styles.heading2}>Let’s try our service now!</h1>
        <p className={`${styles.paragraph} max-w-md`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}

export default CTA