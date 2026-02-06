import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import StrategicPlanning from "../pages/strategic-planning";
import { Layout } from "../components/layout/layout.component";
import paths from "./router.paths";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Redirect / to /dashboard */}
      <Route path={paths.DEFAULT} element={<Navigate to={paths.DASHBOARD} replace />} />

      {/* Dashboard Layout */}
      <Route element={<Layout />}>
        <Route path={paths.DASHBOARD} element={<Dashboard />} />
        <Route path={paths.STRATEGIC_PLANNING} element={<StrategicPlanning />} />
      </Route>

      {/* Fallback */}
      <Route path={paths.ALL} element={<Navigate to={paths.DASHBOARD} replace />} />
    </Routes>
  );
};

export default AppRoutes;
