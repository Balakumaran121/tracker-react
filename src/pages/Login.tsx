const Login = () => {
  return (
    <div className="flex justify-center bg-[#F0EEEB]">
      <div className="w-[512px] h-[622px]  bg-[#FFFFFF] m-20  rounded-3xl flex flex-col items-center gap-16">
        <div className=" text-[35px] font-bold flex justify-center pt-[97px]">
          Login
        </div>
        <input className="border-b-2 w-[400px] font-semibold text-2xl" placeholder="Email"/>
        <input className="border-b-2 w-[400px] font-semibold text-2xl" placeholder="Password"/>
        <span className="font-bold text-xl">Forgot Password?</span>

        <div className=" rounded-md  bg-[#F65D95] p-[40px] w-45">Login</div>
      </div>
      </div>
  )
}

export default Login