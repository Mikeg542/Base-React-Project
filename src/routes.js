import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TimesheetContainer from "./TimesheetContainer";
import ResetPassword from "./ResetPassword";
import Login from "./Login";
import AuthedLayout from "./AuthedLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthedLayout />}>
          <Route index element={<TimesheetContainer />} />
        </Route>
        <Route path="login" element={<Login />}>
          <Route path="reset/:code" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
