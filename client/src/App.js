import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { DashboardAdmin } from "./Components/Dashboard/Dashboard";
import { BetDashboard } from "./Components/Dashboard/Routes/BetDashboard";
import { MatchDashboard } from "./Components/Dashboard/Routes/MatchDashboard";
import { UserDashboard } from "./Components/Dashboard/Routes/UserDashboard";
import { Detail } from "./Components/Detail/Detail";
import FormLogin from "./Components/Forms/FormLogin/FormLogin";
import FormRestration from "./Components/Forms/FormRegistration/FormRegistration";
import { Home } from "./Components/HomeComponent/Home";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import Logout from "./Components/Logout/Logout";
import { PaymentForm } from "./Components/PaymentForm/PaymentForm";
import LoggedRoutes from "./Components/Protections/LoggedRoutes";
import ProtectedRoutes from "./Components/Protections/ProtectedRoutes";

function App() {
  /* axios.get('http://localhost:3001/validate', {withCredentials: true})
  .then((res) => {
    console.log(res.data);
  }) */

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/register" element={<FormRestration />} />
      <Route exact path="/login" element={<FormLogin />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route element={<LoggedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<DashboardAdmin />} />
          <Route exact path="/dashboard/bets/" element={<BetDashboard />} />
          <Route exact path="/dashboard/matchs/" element={<MatchDashboard />} />
          <Route exact path="/dashboard/users/" element={<UserDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
