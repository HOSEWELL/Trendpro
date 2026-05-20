function Topbar() {
  return (
    <div className="h-20 bg-white border-b border-slate-200 px-10 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 leading-tight">
          Workflow Tracker
        </h1>

        <p className="text-sm text-slate-500">
          Developed by Hosewell
        </p>
      </div>

      <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
        H
      </div>
    </div>
  );
}

export default Topbar;