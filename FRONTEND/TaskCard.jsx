
import React from 'react';
import '../styles/TaskCard.css';

function TaskCard({ task, onToggle, onEdit, onDelete }) {

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "";
    }
  };

  return (
    <div className={`task-card ${task.completed ? "task-completed" : ""}`}>

      <div className="task-card-header">

        <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
          {task.priority || "No Priority"}
        </span>

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label="Mark task as completed"
        />

      </div>

      <h3>{task.title}</h3>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-due-date">
        <span>📅</span>
        <span>Due: {task.dueDate || "No due date"}</span>
      </div>

      {/* Edit and Delete Buttons */}
      <div className="task-card-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          🗑️ Delete
        </button>

      </div>

      {task.completed && (
        <div className="completed-label">
          Completed
        </div>
      )}

    </div>
  );
}

export default TaskCard;
