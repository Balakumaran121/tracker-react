const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="w-auto min-h-96 bg-slate-200 mt-24 p-10">
        <div className="text-2xl font-bold flex justify-center -mb-4">
          Signup Form
        </div>
        <div className="pt-20 pb-8 flex flex-col">
          <input className="w-60 h-10 -mt-10 mb-2 rounded-md border-2 border-black" type="text" placeholder="Name"/>
          <input className="w-60 h-10 mb-2 rounded-md border-2 border-black" type="text" placeholder="Email address"/>
          <input className="w-60 h-10 rounded-md border-2 border-black" type="password" placeholder="Password"/>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-24 -mt-2 h-8 bg-purple-700 hover:bg-black text-white rounded-md border-2 border-black">Sign In </button>

        </div>
        <div>
          <p className="font-medium text-slate-600 mt-4">Already have Account?<a href="#" className="font-medium text-purple-600 hover:underline"> Log In</a></p>
        </div>
      </div>

    </div>
  )
}

export default Register