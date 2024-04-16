import styles from '../style';
import { feedback as feedbacks } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className={`flex flex-col gap-12 ${styles.paddingY}`}>
      <div className="flex md:items-center justify-between gap-3 w-full md:flex-row flex-col">
        <h2 className={styles.heading2}>What people are <br className="md:block hidden" /> saying about us</h2>
        <p className={`${styles.paragraph} max-w-md`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex flex-wrap gap-6">
        {feedbacks.map(feedback => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials