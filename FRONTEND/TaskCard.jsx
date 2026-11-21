import React from 'react';
import'../styles/TaskCard.css';
function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const getPriorityClass=(priority)=>{
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
  }
  return (
    <div className={`task-card ${task.completed ? "task-completed" : ""}`}>

      <div className="task-card-top">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority} Priority
        </span>

        <button
          className="task-check"
          onClick={() => onToggle(task.id)}
          title="Mark task as completed"
        >
          {task.completed ? "✓" : ""}
        </button>
      </div>

      <h3>{task.title}</h3>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-card-footer">
        <span>📅 {task.dueDate}</span>
        <span>{task.completed ? "Completed" : "In progress"}</span>
      </div>

      {/* Edit and Delete Buttons */}
      <div className="task-card-actions">

        <button
          className="edit-task-btn"
          onClick={() => onEdit(task)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-task-btn"
          onClick={() => onDelete(task.id)}
        >
          🗑️ Delete
        </button>

      </div>

    </div>
  );


export default TaskCard;
