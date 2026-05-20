import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Topbar />

        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;