import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard";

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
