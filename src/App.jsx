import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Applications from "./pages/Applications";
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationDetail from "./pages/ApplicationDetail";
import Approved from "./pages/Approved";
import Rejected from "./pages/Rejected";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Applications />} />

          <Route
            path="/create"
            element={<ApplicationForm />}
          />

          <Route
            path="/applications/:id"
            element={<ApplicationDetail />}
          />

          <Route
            path="/approved"
            element={<Approved />}
          />

          <Route
            path="/rejected"
            element={<Rejected />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;