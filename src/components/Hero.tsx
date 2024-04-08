import { MdKeyboardArrowRight } from "react-icons/md"
const Hero = () => {
  return (
    <div className="container h-[400px] flex p-6 ">
      <div className=" flex  font-medium w-[300px] items-left justify-center flex-col gap-3 left">
        <a className="bg_hover flex items-center gap-6 " href="">Woman's Fashion <MdKeyboardArrowRight size={25} /></a>
        <a className="bg_hover flex items-center gap-12" href="">Men's Fashion <MdKeyboardArrowRight size={25} /></a>
        <a href="">Electronics</a>
        <a href="">Home & LifeStyle</a>
        <a href="">Medicine</a>
        <a href="">Sports & Outdoor</a>
        <a href="">Baby's & Toys</a>
        <a href="">Groceries & Pets</a>
        <a href="">Health & Beauty</a>
      </div>
      <div className="flex w-full h-full justify-center items-center img">
        <img src="banner.png" alt="banner" />
      </div>
    </div>
  )
}

export default Hero