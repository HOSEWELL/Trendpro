import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";

function Approved() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApproved();
  }, []);

  const fetchApproved = async () => {
    try {
      const response = await api.get("/applications/");

      const approved = response.data.filter(
        (app) => app.status === "APPROVED"
      );

      setApplications(approved);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-slate-800 mb-2">
        Approved Applications
      </h1>

      <p className="text-slate-500 mb-10">
        Successfully approved workflows
      </p>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-5">Tracking</th>
              <th className="text-left p-5">Applicant</th>
              <th className="text-left p-5">Company</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-t border-slate-100"
              >
                <td className="p-5">
                  <Link
                    to={`/applications/${app.id}`}
                    className="text-blue-600 font-semibold"
                  >
                    {app.tracking_number}
                  </Link>
                </td>

                <td className="p-5">
                  {app.applicant_name}
                </td>

                <td className="p-5">
                  {app.company_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {applications.length === 0 && (
          <div className="p-10 text-center text-slate-500">
            No approved applications
          </div>
        )}
      </div>
    </div>
  );
}

export default Approved;