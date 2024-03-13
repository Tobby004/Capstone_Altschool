import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        alert('No user with that email was found. Please try again or sign up first.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password. Please try again.');
      } else {
        alert('An error occurred while signing in. Please try again later.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg px-4 py-8">
        {/* Social Login Section */}
        <div className="mb-4 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Facebook</button>
          <button className="bg-black text-white px-6 py-2 rounded-md">Apple</button>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-6 text-center">Sign in to your account</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
            <input
  type="email"
  name="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)} // add event argument here
  placeholder="Email address"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>
            </div>
            {/* Password Input */}
            <div className="mb-6">
            <input
  type="password"
  name="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)} // add event argument here
  placeholder="Password"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
/>
            </div>
            {/* Login Button */}
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

        {/* Terms and Agreement */}
        <div className="text-center text-xs text-gray-600">
          By signing in, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
        </div>

        {/* Sign Up Redirect */}
        <div className="text-center mt-4">
          <span>Don’t have an account?</span> <a href="/signup" className="text-blue-500">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
