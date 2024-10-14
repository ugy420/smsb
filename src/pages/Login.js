import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isAdmin, setIsAdmin] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Add error state
    const navigate = useNavigate();

    const handleLoginAsAdmin = () => {
        setIsAdmin(true);
    };

    const handleLoginAsUser = () => {
        setIsAdmin(false);
    };

    const handleBack = () => {
        setIsAdmin(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        try {
            const response = await fetch('YOUR_API_URL/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, isAdmin }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            // Store token or user data if necessary

            // Redirect based on user role
            if (isAdmin) {
                navigate('/admin-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        } catch (error) {
            setError(error.message); // Show error message
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
            <div className="bg-white p-10 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">SPORTS GROUND BOOKING</h2>

                {/* Role Selection Buttons */}
                {isAdmin === null ? (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-center mb-4">Select Your Role</h3>
                        <div className="flex justify-around">
                            <button onClick={handleLoginAsAdmin} className="flex-1 mx-2 p-3 rounded bg-orange-600 text-white hover:bg-orange-700 transition duration-300">Login as Admin</button>
                            <button onClick={handleLoginAsUser} className="flex-1 mx-2 p-3 rounded bg-green-600 text-white hover:bg-green-700 transition duration-300">Login as User</button>
                        </div>
                    </div>
                ) : (
                    <form className="mt-6" onSubmit={handleSubmit}>
                        {error && <p className="text-red-600">{error}</p>}
                        <div className="mt-4">
                            <label className="block text-sm font-semibold mb-1" htmlFor="email">Email Address</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="your@example.com" required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="password" required />
                        </div>
                        <button type="submit" onClick={() => window.location.href='/ahome'} className="mt-4 w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition duration-300">Sign In</button>
                        <p className="mt-4 text-center text-sm">Forgot Your Password?</p>
                        <div className="flex justify-between mt-4">
                            <button className="flex-1 mx-1 bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 transition duration-300">Continue With Google</button>
                            <button className="flex-1 mx-1 bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 transition duration-300">Continue With Microsoft</button>
                        </div>
                        <button type="button" onClick={handleBack} className="mb-4 text-blue-500 underline">Back</button>
                        <p className="mt-4 text-center text-sm">Are You A Venue Administrator? <a href="/signin" className="text-red-600 underline">Sign In Here.</a></p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
