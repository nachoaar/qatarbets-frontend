import { Routes, Route } from "react-router-dom";
import { DashboardAdmin } from "./Components/Dashboard/Dashboard";
import { BetDashboard } from "./Components/Dashboard/Routes/BetDashboard";
import { MatchDashboard } from "./Components/Dashboard/Routes/MatchDashboard";
import { StatDashboard } from "./Components/Dashboard/Routes/StatDashboard";
import { UserDashboard } from "./Components/Dashboard/Routes/UserDashboard";
import { Detail } from "./Components/Detail/Detail";
import FormLogin from "./Components/Forms/FormLogin/FormLogin";
import FormRestration from "./Components/Forms/FormRegistration/FormRegistration";
import { Home } from "./Components/HomeComponent/Home";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import Dashboard from "./Components/DashboardAdmin/dashboard";



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/register" element={<FormRestration />} />
      <Route exact path="/login" element={<FormLogin />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/dashboardAdmin" element={<Dashboard />}/>
      <Route exact path="/dashboard/stats/" element={<StatDashboard />} />
      <Route exact path="/dashboard/bets/" element={<BetDashboard />} />
      <Route exact path="/dashboard/matchs/" element={<MatchDashboard />} />
      <Route exact path="/dashboard/users/" element={<UserDashboard />} />
      <Route exact path="/dashboard" element={<DashboardAdmin />} />
    </Routes>
  );
}

export default App;
