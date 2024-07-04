import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js";
import TokenContext from '../context/TokenContext.js';

function Register() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/register", formData);
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token });
            userDispatch({ type: "SET_USER", payload: result.data.user });
            localStorage.setItem("authToken", JSON.stringify(result.data.token));
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            {userToken && <Navigate to="/" />}
            <section className="register-container w-full max-w-md px-8 py-10 bg-white shadow-lg rounded-lg">
                <div className="md:flex md:flex-col md:items-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create an Account</h2>
                    <form onSubmit={handleSubmit} className="w-full">
                        {error && (
                            <div className="text-center text-red-500 mb-4">{error}</div>
                        )}
                        <div className="mb-6">
                            <input
                                type="text"
                                name="name"
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-md"
                                placeholder="Full Name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-md"
                                placeholder="Email Address"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-md"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Register;
