import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.paddingY}`} id="clients">
      <div className="flex items-center gap-8 justify-center flex-wrap">
        {clients.map(client => (
          <div className="flex items-center justify-center w-[110px]" key={client.id}>
            <img src={client.logo} alt="client" className="w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients