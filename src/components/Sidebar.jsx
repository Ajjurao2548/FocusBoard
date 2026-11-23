import { LayoutDashboard, CheckSquare, CalendarDays, Settings } from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">FocusBoard</h2>

      <nav>
        <a href="#dashboard" className="active">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a href="#tasks">
          <CheckSquare size={20} />
          My Tasks
        </a>

        <a href="#calendar">
          <CalendarDays size={20} />
          Calendar
        </a>

        <a href="#settings">
          <Settings size={20} />
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;