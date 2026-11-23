
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import FocusNotes from "./components/FocusNotes";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";

import { sampleTasks } from "./data/sampleTasks";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage(
    "focusboard-tasks",
    sampleTasks
  );

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      activeFilter === "All" || task.status === activeFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const totalTasks = tasks.length;
  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const completionPercentage = totalTasks
    ? Math.round((completed / totalTasks) * 100)
    : 0;

  const handleSave = (taskData) => {
    if (editingTask) {
      setTasks((previous) =>
        previous.map((task) =>
          task.id === editingTask.id
            ? { ...task, ...taskData }
            : task
        )
      );
    } else {
      setTasks((previous) => [
        ...previous,
        {
          ...taskData,
          id: Date.now(),
          status: "To do",
        },
      ]);
    }

    setShowForm(false);
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  };

  const handleStatusChange = (id, status) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section className="stats-grid">
          <StatCard title="Total Tasks" value={totalTasks} />
          <StatCard title="In Progress" value={inProgress} />
          <StatCard title="Completed" value={completed} />
          <StatCard
            title="Completion"
            value={`${completionPercentage}%`}
          />
        </section>

        <FocusNotes />

        <section className="tasks-section" id="tasks">
          <div className="tasks-heading">
            <h2>My Tasks</h2>
            <button onClick={() => setShowForm(true)}>
              + Add Task
            </button>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterTabs
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            aria-label="Filter by priority"
          >
            <option value="All">All priorities</option>
            <option value="High">High priority</option>
            <option value="Medium">Medium priority</option>
            <option value="Low">Low priority</option>
          </select>

          <TaskList
            tasks={filteredTasks}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        </section>

        {showForm && (
          <div className="modal-overlay">
            <TaskForm
              onSave={handleSave}
              onCancel={() => {
                setShowForm(false);
                setEditingTask(null);
              }}
              editingTask={editingTask}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
