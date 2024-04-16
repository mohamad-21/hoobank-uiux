const Button = ({style = '', children}) => {
  return (
    <button className={`bg-blue-gradient text-primary py-3 px-5 rounded-md font-medium hover:opacity-80 duration-200 ${style}`}>{children}</button>
  )
}

export default Button