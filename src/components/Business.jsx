import styles from '../style';
import Button from './Button';
import { features } from '../constants';

const Business = () => {
  return (
    <section className={`${styles.paddingY} flex md:flex-row flex-col justify-between gap-12`} id="features">
      <div className="flex-1 flex items-start flex-col gap-4">
        <h1 className={`${styles.heading2}`}>You do the business, we’ll handle the money.</h1>
        <p className={`${styles.paragraph} max-w-md`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button>Get Started</Button>
      </div>
      <div className="flex-1 items-start flex md:items-end flex-col gap-4">
        {features.map(feature => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ({icon, title, content}) => (
  <div className="feature-card flex items-start gap-3 p-6 rounded-2xl cursor-pointer">
    <div className={`${styles.flexCenter} bg-dimBlue p-3  rounded-full`}>
      <img src={icon} alt="icon" className="max-w-[30px] max-h-[30px]" />
    </div>
    <div>
      <h3>{title}</h3>
      <p className="text-dimWhite text-xs leading-6 mt-2 max-w-xs">{content}</p>
    </div>
  </div>
)


export default Business