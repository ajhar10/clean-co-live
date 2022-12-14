import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoute } from "./routes/privateRoute";
import AdminRoute from "./authentication/AdminRoute";
import DashBoard from "./pages/DashBoard/DashBoard";
import AddServices from "./pages/DashBoard/AddServices";
import AddAdmin from "./pages/DashBoard/AddAdmin";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route element={<PrivateRoute />}>
          {privateRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="add-service" element={<AddServices />} />
            <Route path="add-admin" element={<AddAdmin />} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
