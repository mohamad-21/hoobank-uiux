import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} gap-12 gap-y-7 mb-6 sm:mb-20 flex-wrap md:flex-row flex-col sm:mt-0 mt-16`}>
      {stats.map(item => (
        <div className="flex items-center gap-4" key={item.id}>
          <h2 className="text-3xl font-semibold">
            {item.value}
          </h2>
          <p className="text-gradient text-lg">{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats