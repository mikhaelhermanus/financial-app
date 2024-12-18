'use client'
import React, { useState } from 'react'
const page = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};
        // if (!formData.username) formErrors.username = "Username is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.password) formErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            formErrors.confirmPassword = "Passwords do not match";

        if (Object.keys(formErrors).length === 0) {
            console.log("line Form submitted", formData);
            // Submit the form (e.g., send data to an API)
        } else {

            setErrors(formErrors);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <form
                    onSubmit={handleSubmit} 
                    className="space-y-4">
                    <div>
                        {/* <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            // value={formData.username}
                            // onChange={handleChange}
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        /> */}
                        {/* {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>} */}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default page