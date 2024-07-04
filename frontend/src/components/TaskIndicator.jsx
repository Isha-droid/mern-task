import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return ( 
        <nav className="flex-grow">
            <ul className="flex gap-3 justify-between p-3 bg-gray-800 rounded-lg shadow-md">
                <li>
                    <NavLink to="/" className="text-white hover:text-gray-200">All Tasks</NavLink>
                </li>
                <li>
                    <NavLink to="/active" className="text-white hover:text-gray-200">Active</NavLink>
                </li>
                <li>
                    <NavLink to="/completed" className="text-white hover:text-gray-200">Completed</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default TaskIndicator;
