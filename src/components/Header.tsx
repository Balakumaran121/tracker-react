

const Header = () => {
  return (
    <section className="flex justify-between bg-black h-8 items-center ">
     <div className=" bg-black relative w-full max-w-[1800px] flex justify-around pl-11 ml-60  text-white gap-6    "> 
        <div className="flex gap-2 ">
            <p>Summer Sale for All Swim Suits and Free Express Delivery - OFF 50%</p>
            <a className='border outline-none border-none hover:underline decoration-white-500'href="">Shop Now</  a> 
        </div>  
    </div>
     <div className="flex  bg-black w-full max-w-[300px] items-center justify-end pr-5">
     <button>
     <select className='bg-black text-white border border-none outline-none' name="cars" id="cars">
         <option value="english">English</option>
         <option value="tamil">Tamil</option>
         <option value="hindi">Hindi</option>
         <option value="french">French</option>
     </select>
     </button>
    </div>
    </section>
   

  )
}

export default Header