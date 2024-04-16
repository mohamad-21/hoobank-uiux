import { quotes } from '../assets';
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <button className="feedback-card flex flex-col items-start justify-between text-left gap-8 py-10 px-7 rounded-2xl max-w-xs">
      <img src={quotes} alt="quote" className="w-[30px]" />
      <p className={`${styles.paragraph} mb-auto`}>{content}</p>
      <div className="flex items-center gap-4">
        <img src={img} alt="person" className="w-[45px] h-[45px] rounded-full" />
        <div>
          <h4 className="text-sm">{name}</h4>
          <p className={`${styles.paragraph} text-xs`}>{title}</p>
        </div>
      </div>
    </button>
  )
}

export default FeedbackCard