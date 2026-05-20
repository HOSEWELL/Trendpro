import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Send,
    CircleDashed,
    CheckCircle,
    XCircle,
} from "lucide-react";

import api from "../api/axios";

function ApplicationDetail() {
    const { id } = useParams();

    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchApplication();
    }, []);

    const fetchApplication = async () => {
        try {
            const response = await api.get(`/applications/${id}`);
            setApplication(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await api.post(`/applications/${id}/submit`);
            await fetchApplication();
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    const handleStartReview = async () => {
        setLoading(true);

        try {
            await api.post(`/applications/${id}/start-review`);
            await fetchApplication();
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    const handleDecision = async (decision) => {
        setLoading(true);

        try {
            await api.post(`/applications/${id}/decision`, {
                decision,
                reviewer_comment: "Reviewed from frontend",
            });

            await fetchApplication();
        } catch (error) {
            console.log(error.response?.data || error);
        }

        setLoading(false);
    };

    if (!application) {
        return (
            <div className="text-center text-slate-500">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-start justify-between mb-10">
                <div>
                    <p className="text-sm uppercase tracking-wide text-slate-400 mb-2">
                        Application
                    </p>

                    <h1 className="text-5xl font-bold text-slate-800">
                        {application.tracking_number}
                    </h1>

                    <p className="text-slate-500 mt-2">
                        {application.company_name}
                    </p>
                </div>

                <div
                    className={`
            px-5 py-2 rounded-full text-sm font-semibold
            ${application.status === "Draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : ""
                        }
            ${application.status === "Submitted"
                            ? "bg-blue-100 text-blue-700"
                            : ""
                        }
            ${application.status === "Under Review"
                            ? "bg-purple-100 text-purple-700"
                            : ""
                        }
            ${application.status === "Approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : ""
                        }
            ${application.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : ""
                        }
          `}
                >
                    {application.status}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-8">
                            Application Information
                        </h2>

                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <p className="text-sm text-slate-400 mb-2">
                                    Applicant Name
                                </p>

                                <p className="font-semibold text-slate-800">
                                    {application.applicant_name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400 mb-2">
                                    Applicant Email
                                </p>

                                <p className="font-semibold text-slate-800">
                                    {application.applicant_email}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400 mb-2">
                                    Company
                                </p>

                                <p className="font-semibold text-slate-800">
                                    {application.company_name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-400 mb-2">
                                    Application Type
                                </p>

                                <p className="font-semibold text-slate-800">
                                    {application.application_type}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                            Description
                        </h2>

                        <div className="bg-slate-50 rounded-xl p-6 text-slate-700 leading-relaxed">
                            {application.description}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 h-fit">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">
                        Workflow Actions
                    </h2>

                    <div className="space-y-4">
                        {application.status === "Draft" && (
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <Send size={18} />
                                Submit
                            </button>
                        )}

                        {application.status === "Submitted" && (
                            <button
                                onClick={handleStartReview}
                                disabled={loading}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <CircleDashed size={18} />
                                Start Review
                            </button>
                        )}

                        {application.status === "Under Review" && (
                            <>
                                <button
                                    onClick={() => handleDecision("APPROVED")}
                                    disabled={loading}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                                >
                                    <CheckCircle size={18} />
                                    Approve
                                </button>

                                <button
                                    onClick={() => handleDecision("REJECTED")}
                                    disabled={loading}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                                >
                                    <XCircle size={18} />
                                    Reject
                                </button>
                            </>
                        )}

                        {application.status === "Approved" && (
                            <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center font-semibold">
                                Application Approved
                            </div>
                        )}

                        {application.status === "Rejected" && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center font-semibold">
                                Application Rejected
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicationDetail;