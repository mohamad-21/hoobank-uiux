import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';

const Footer = () => {
  return (
    <footer className={`${styles.paddingY} ${styles.paddingX} mt-12 pb-4 flex flex-col gap-20 bg-[#0B0A0C99]`}>
      <div className="flex md:flex-row flex-col justify-between w-full gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <img src={logo} alt="hoobank" className="w-[150px]" />
          <p className={`${styles.paragraph} max-w-[230px] leading-[22px] text-xs`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="flex-[2] flex gap-6 justify-between flex-wrap gap-y-10">
          {footerLinks.map(item => (
            <div className="min-w-[150px]" key={item.title}>
              <h3 className="mb-4">{item.title}</h3>
              <ul className="flex flex-col gap-1.5">
                {item.links.map(link => (
                  <li key={link.name}>
                    <a href={link.link} className="text-dimWhite text-sm hover:text-secondary duration-200">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between flex-wrap gap-6 border-t border-t-[#3F3E45] pt-8">
        <p className="text-xs text-dimWhite">
          Copyright &copy; {new Date().getFullYear()} HooBank. coded with <a href="https://github.com/mohamadc21" target="_blank" className="text-white hover:underline">Mohamad</a>
        </p>
        <div className="flex items-center gap-2 px-5">
          {socialMedia.map((social, idx) => {
            let color = '';
            switch(idx) {
              case 0:
                color = 'pink-600';
                break;
              case 1:
                color = 'blue-600';
                break;
              case 2:
                color = 'sky-500';
                break;
              case 3:
                color = 'sky-700';
                break;
              default: '#'
            }
            return (
              <a href={social.link} className={`p-3 rounded-full border-2 border-${color} active:scale-95 duration-200 hover:bg-${color}`} target="_blank" key={social.id}>
                <img src={social.icon} alt="social media" className="w-[18px] h-[18px]" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer