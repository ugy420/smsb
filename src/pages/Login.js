import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@email.com" && password === "admin") {
            navigate('/ahome');
            setIsLoggedIn(true);
        }
        else if (email === "user@email.com" && password === "password") {
            navigate('/home');
            setIsLoggedIn(true);
        }
        else {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <form className="mt-10" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center text-pink-500">
                        SPORTS GROUND BOOKING
                    </h2>
                    {error && <p className="text-red-600">{error}</p>}
                    <div className="mt-4">
                        <label className="block text-sm font-semibold mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="your@example.com"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition duration-300"
                    >
                        Sign In
                    </button>
                    <p className="mt-4 text-center text-sm">Forgot Your Password?</p>
                    <div className="flex justify-between mt-4">
                        <button className="flex-1 mx-1 bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 transition duration-300">
                            Continue With Google
                        </button>
                        <button className="flex-1 mx-1 bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 transition duration-300">
                            Continue With Microsoft
                        </button>
                    </div>
                    <p className="mt-4 text-center text-sm">
                        Are You A Venue Administrator?{' '}
                        <a href="/signin" className="text-red-600 underline">
                            Sign In Here.
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
