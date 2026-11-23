import { Search, Bell, Plus } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>My Dashboard</h1>
        <p>Welcome back! Let's stay productive.</p>
      </div>

      <div className="header-actions">
        <button className="icon-button" aria-label="Search">
          <Search size={20} />
        </button>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <button className="add-task-button">
          <Plus size={18} />
          Add Task
        </button>
      </div>
    </header>
  );
}

export default Header;