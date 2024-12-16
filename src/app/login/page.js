'use client'
import React from 'react'
import AuthLayout from '../components/AuthComponent/AuthLayout'
import Link from 'next/link'
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
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
                <form className="space-y-4">
                    <div>
                        <label form="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label form="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
                    </div>
                </form>
                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login