'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// RTK
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '@/lib/services/api';
import { setCredentials } from '@/lib/features/authSlice'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const router = useRouter()
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    console.log(error, 'line 15')
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add login logic here
        try {
            const response = await loginUser({ email: email, password: password }).unwrap();
            console.log(response, 'line 17')
            dispatch(setCredentials({ user: response.user, token: response.token }));
            router.push('/financial-plans'); // Redirect ke halaman home
        } catch (err) {
            console.log(err, 'line 21')
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Welcome Back!
                    </h1>
                    <p className="text-gray-600 text-sm mb-6">
                        Manage your financial goals easily and effectively.
                    </p>
                </div>
                <form className="space-y-4"
                onSubmit={handleSubmit}
                >
                    <div>
                        <label form="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" id="email" name="email" placeholder="Enter your email" className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label form="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" id="password" name="password" placeholder="Enter your password" className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {isLoading ? 'Loading ... ' : 'Login'}
                            </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Don't have an account? <Link href={'/register'}> <span className="text-blue-500 hover:underline">Sign up</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login