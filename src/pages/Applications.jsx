import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Settings2 } from "lucide-react";

import api from "../api/axios";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await api.get("/applications/");
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-bold text-slate-800">
            Applications
          </h1>

          <p className="text-slate-500 mt-2">
            Manage and track all company workflows
          </p>
        </div>

        <Link
          to="/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl shadow-md transition"
        >
          Create Application
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left p-5 text-sm font-semibold text-slate-600">
                Tracking
              </th>

              <th className="text-left p-5 text-sm font-semibold text-slate-600">
                Applicant
              </th>

              <th className="text-left p-5 text-sm font-semibold text-slate-600">
                Company
              </th>

              <th className="text-left p-5 text-sm font-semibold text-slate-600">
                Type
              </th>

              <th className="text-left p-5 text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="text-center p-5 text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition"
              >
                <td className="p-5">
                  <Link
                    to={`/applications/${app.id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {app.tracking_number}
                  </Link>
                </td>

                <td className="p-5 text-slate-700">
                  {app.applicant_name}
                </td>

                <td className="p-5 text-slate-700">
                  {app.company_name}
                </td>

                <td className="p-5 text-slate-700">
                  {app.application_type}
                </td>

                <td className="p-5">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {app.status}
                  </span>
                </td>

                <td className="p-5 text-center">
                  <Link
                    to={`/applications/${app.id}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 transition"
                  >
                    <Settings2 size={18} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {applications.length === 0 && (
          <div className="p-10 text-center text-slate-500">
            No applications found
          </div>
        )}
      </div>
    </div>
  );
}

export default Applications;