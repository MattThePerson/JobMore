import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import KanbanPage from "./pages/KanbanPage/KanbanPage";

const loggedIn = true; // TODO: implement properly

const RequireAuth = () => (loggedIn ? <Outlet /> : <Navigate to="/login" />);

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

/* App */
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<div>unknown path</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
