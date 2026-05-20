import {
  Building2,
  Server,
  Globe,
  ShieldCheck,
  Cpu,
  Database,
} from "lucide-react";

function Settings() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-slate-800 mb-2">
          Settings
        </h1>

        <p className="text-slate-500 text-lg">
          Workflow system configuration and platform information
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* COMPANY CARD */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Building2 className="text-blue-600" size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Organization
              </h2>

              <p className="text-slate-500">
                Company workflow configuration
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  Company Name
                </p>

                <p className="font-semibold text-slate-800">
                  TrendPro Systems
                </p>
              </div>

              <Globe className="text-slate-400" size={22} />
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  Workflow Engine
                </p>

                <p className="font-semibold text-emerald-600">
                  Active
                </p>
              </div>

              <ShieldCheck
                className="text-emerald-500"
                size={22}
              />
            </div>
          </div>
        </div>

        {/* SYSTEM CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Server className="text-purple-600" size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                System Information
              </h2>

              <p className="text-slate-500">
                Current application stack
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  Frontend
                </p>

                <p className="font-semibold text-slate-800">
                  React + Tailwind CSS
                </p>
              </div>

              <Cpu className="text-slate-400" size={22} />
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  Backend API
                </p>

                <p className="font-semibold text-slate-800">
                  Django Ninja API
                </p>
              </div>

              <Database className="text-slate-400" size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CARD */}
      <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-3">
          Workflow Tracker Platform
        </h2>

        <p className="text-slate-300 leading-relaxed max-w-3xl">
          Internal workflow management system for handling
          approvals, submissions, reviews, and organizational
          processes in a centralized dashboard environment.
        </p>
      </div>
    </div>
  );
}

export default Settings;