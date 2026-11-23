import { Pencil, Trash2 } from "lucide-react";

function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="task-card">
      <div className="task-details">
        <h3>{task.title}</h3>
        <p>{task.description}</p>

        <div className="task-labels">
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>

          <span className="task-date">
            Due: {task.dueDate}
          </span>
        </div>
      </div>

      <div className="task-actions">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          aria-label={`Change status for ${task.title}`}
        >
          <option>To do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button onClick={() => onEdit(task)} aria-label="Edit task">
          <Pencil size={18} />
        </button>

        <button onClick={() => onDelete(task.id)} aria-label="Delete task">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;