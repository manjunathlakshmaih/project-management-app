import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
