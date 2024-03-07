import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="border border-gray-300 bg-opacity-80 backdrop-blur-md p-8 rounded-md text-white text-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 px-28">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full rounded-md border border-black text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full rounded-md border border-black text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-transparent border border-white text-white py-2 px-4 rounded-md hover:bg-zinc-900 hover:text-white mx-auto block transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-white">
          Don't have an account?{' '}
          <Link href="../../auth/register">
            <div className="text-blue-500">Register here</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
