import { NavLink } from "react-router-dom";
import {
  FileText,
  CheckCircle,
  XCircle,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menu = [
    {
      name: "Applications",
      icon: <FileText size={18} />,
      path: "/",
    },

    {
      name: "Approved",
      icon: <CheckCircle size={18} />,
      path: "/approved",
    },

    {
      name: "Rejected",
      icon: <XCircle size={18} />,
      path: "/rejected",
    },

    {
      name: "Settings",
      icon: <Settings size={18} />,
      path: "/settings",
    },
  ];

  return (
    <div className="w-64 bg-slate-950 text-white min-h-screen p-6 border-r border-slate-800">
      <div className="mb-10">
        <img
          src="/logo.png"
          alt="TrendPro"
          className="h-10"
        />
      </div>

      <div className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`
            }
          >
            {item.icon}

            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;