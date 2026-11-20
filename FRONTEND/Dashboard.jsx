import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import "../styles/Dashboard.css";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";

function Dashboard() {

  const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem("planoraTasks");

    if (savedTasks !== null) {
      return JSON.parse(savedTasks);
    }
  } catch (error) {
    console.error("Error loading tasks:", error);
  }

  return [
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Finish the React components and practice hooks.",
      priority: "High",
      dueDate: "20 Nov 2026",
      completed: false,
    },
    {
      id: 2,
      title: "Study Data Structures",
      description: "Revise arrays, strings and linked lists.",
      priority: "Medium",
      dueDate: "21 Nov 2026",
      completed: false,
    },
    {
      id: 3,
      title: "Update Project Documentation",
      description: "Write the latest progress of the Planora project.",
      priority: "Low",
      dueDate: "22 Nov 2026",
      completed: true,
    },
  ];
});
useEffect(() => {
  localStorage.setItem(
    "planoraTasks",
    JSON.stringify(tasks)
  );
}, [tasks]);
  

  const [search, setSearch] = useState("");
  const [showAddTask, setShowAddTask]= useState(false);
  // Task status filter
  const [statusFilter, setStatusFilter] = useState("All");

// Task priority filter
  const [priorityFilter, setPriorityFilter] = useState("All");

// Task sorting
  const [sortBy, setSortBy] = useState("default");
  const sortedTasks = [...filteredTasks].sort((a, b) => {
  switch (sortBy) {
    case "newest":
      return new Date(b.createdAt) - new Date(a.createdAt);

    case "oldest":
      return new Date(a.createdAt) - new Date(b.createdAt);

    case "high":
      return (
        ["High", "Medium", "Low"].indexOf(a.priority) -
        ["High", "Medium", "Low"].indexOf(b.priority)
      );

    case "low":
      return (
        ["Low", "Medium", "High"].indexOf(a.priority) -
        ["Low", "Medium", "High"].indexOf(b.priority)
      );

    case "dueDate":
      return new Date(a.dueDate) - new Date(b.dueDate);

    default:
      return 0;
  }
});

  const [editingTask, setEditingTask] = useState(null);
  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };
  const handleAddTask = (newTask) => {
  setTasks((previousTasks) => [
    ...previousTasks,
    {
      ...newTask,
      id: Date.now(),
      completed: false,
    },
  ]);

  setShowAddTask(false);
};
const handleDeleteTask = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (confirmDelete) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }
};
const handleEditTask = (updatedTask) => {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );

  setEditingTask(null);
};


  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = totalTasks - completedTasks;
  
  task.title.toLowerCase().includes(search.toLowerCase())
;


  
const filteredTasks = tasks.filter((task) => {

const filteredTasks = tasks.filter((task) => {

  // Search filter
  const matchesSearch = task.title
    .toLowerCase()
    .includes(search.toLowerCase());

  // Status filter
  const matchesStatus =
    statusFilter === "All" ||
    (statusFilter === "Completed" && task.completed) ||
    (statusFilter === "Pending" && !task.completed);

  // Priority filter
  const matchesPriority =
    priorityFilter === "All" ||
    task.priority === priorityFilter;

  return matchesSearch && matchesStatus && matchesPriority;

});


  
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your productivity overview.</p>
          </div>

          <div className="profile">
            <div className="profile-avatar">P</div>
            <div>
              <h4>Planora User</h4>
              <span>My Workspace</span>
            </div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="welcome-label">YOUR PRODUCTIVITY SPACE</p>
            <h2>Let's make today productive!</h2>
            <p>Small steps every day lead to big achievements.</p>
          </div>

          <div className="welcome-icon">✦</div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <p>Total Tasks</p>
            <h2>{totalTasks}</h2>
            <span>All your tasks</span>
          </div>

          <div className="stat-card">
            <p>Pending Tasks</p>
            <h2>{pendingTasks}</h2>
            <span>Tasks to complete</span>
          </div>

          <div className="stat-card">
            <p>Completed Tasks</p>
            <h2>{completedTasks}</h2>
            <span>Tasks finished</span>
          </div>
        </section>

        <section className="tasks-section">
        <div className="tasks-heading">
  <div>
    <h2>My Tasks</h2>
    <p>Keep track of your daily activities.</p>
  </div>

  <div className="task-actions">

    <input
      type="search"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="task-search"
    />

    <button
      className="add-task-btn"
      onClick={() => setShowAddTask(true)}
    >
      + Add Task
    </button>

  </div>
</div>

          {showAddTask && (
  <AddTask
    onAddTask={handleAddTask}
    onClose={() => setShowAddTask(false)}
  />
)}
{editingTask && (
  <EditTask
    task={editingTask}
    onSave={handleEditTask}
    onClose={() => setEditingTask(null)}
  />
)}
          <div className="task-grid">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
               <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={handleDeleteTask}
                    onEdit =  {setEditingTask}
                    /> 
              ))
            ) : (
              <p className="no-tasks">No matching tasks found.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
}

export default Dashboard;