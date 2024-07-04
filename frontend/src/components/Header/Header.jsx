import React from 'react';
import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import './header.css';

function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);

    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

    return (
        <div>
            <nav className='header bg-white shadow-lg py-4 px-6 flex justify-between items-center'>
                <div className="text-3xl font-bold text-blue-700">
                    <NavLink to="/" className="">Task App</NavLink>
                </div>
                <div className='flex items-center'>
                    {
                        token ? (
                            <div className='flex items-center'>
                                <p className='mr-5 text-gray-800'>
                                    Welcome, <span className='font-semibold text-blue-700 capitalize'>{user.name}</span>
                                </p>
                                <button 
                                    onClick={logout} 
                                    className="logout bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition duration-300"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <ul className='flex gap-6'>
                                <li>
                                    <NavLink 
                                        to="/login" 
                                        className="text-gray-700 font-medium hover:text-blue-700 transition duration-300"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/register" 
                                        className="text-gray-700 font-medium hover:text-blue-700 transition duration-300"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;
