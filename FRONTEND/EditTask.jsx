
import React, { useState } from "react";

function EditTask({ task, onSave, onClose }) {

  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...task,
      ...formData
    });
  };

  return (
    <div className="task-modal">
      <form onSubmit={handleSubmit}>

        <h2>Edit Task</h2>

        <input
           type="date"
            name="dueDate"
            value={formData.dueDate || ""}
             onChange={handleChange}
      />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          placeholder="Due Date (e.g. 20 Nov 2026)"
        />

        <button type="submit" className="save-task-btn">
         Save Changes
        </button>

        <button type="button" 
        className="cancel-task-btn"
        onClick={onClose}
        >
          Cancel
        </button>

      </form>
    </div>
  );
}

export default EditTask;
