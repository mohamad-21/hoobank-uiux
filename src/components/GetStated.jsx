import { arrowUp } from "../assets"

const GetStated = () => {
  return (
    <button className="w-[100px] h-[100px] rounded-full bg-blue-gradient p-0.5">
      <div className="flex items-center justify-center gap-0.5 w-full h-full bg-primary rounded-full flex-col text-sm font-semibold hover:bg-transparent duration-200 group">
        <span className="flex gap-1 text-gradient group-hover:bg-none group-hover:bg-primary">Get <img src={arrowUp} alt="arrow" /></span>
        <span className="text-gradient group-hover:bg-none group-hover:bg-primary">Started</span>
      </div>
    </button>
  )
}

export default GetStated