import { useState,ChangeEvent,FormEvent } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange  = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email:email,
      password:password
    }
    console.log(data)
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md m-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <div className="mb-10">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border-b-2 border-gray-300 py-2 px-3 text-lg rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-10">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border-b-2 border-gray-300 py-2 px-3 text-lg rounded-md focus:outline-none focus:border-pink-500"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-8 text-center">
          <a href="#" className="text-pink-500 font-semibold text-lg">Forgot Password?</a>
        </div>
        <div className="text-center mt-10 ">
          <button type="submit" className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
