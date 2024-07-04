import React, { useContext } from 'react';
import moment from 'moment';
import './task.css';
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch({
            type: "REMOVE_TASK",
            id
        });
    };

    const handleMarkDone = (e) => {
        dispatch({
            type: "MARK_DONE",
            id
        });
    };

    return (
        <div className="task-container bg-white py-4 px-6 rounded-lg shadow-lg flex items-center justify-between mb-4">
            <div className="mark-done flex items-center">
                <input 
                    type="checkbox" 
                    className="checkbox mr-3" 
                    onChange={handleMarkDone} 
                    checked={task.completed} 
                />
            </div>
            <div className="task-info flex-grow text-gray-800">
                <h4 className={`task-title text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>
                    {task.title}
                </h4>
                <p className="task-description text-sm">{task.description}</p>
                <div className="task-time text-xs text-gray-500 mt-2 italic">
                    {task?.createdAt ? moment(task.createdAt).fromNow() : 'just now'}
                </div>
            </div>
            <div className="remove-task ml-4">
                <DeleteIcon
                    style={{ fontSize: 30, cursor: "pointer" }}
                    onClick={handleRemove}
                    className="remove-task-btn text-red-500 hover:text-red-700 transition-colors duration-300"
                />
            </div>
        </div>
    );
}

export default Task;
