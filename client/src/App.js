import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/404.jsx/NotFound";
import { BetDashboard } from "./Components/Dashboard/Routes/BetDashboard";
import { MatchDashboard } from "./Components/Dashboard/Routes/MatchDashboard";
import { Simulation } from "./Components/Dashboard/Routes/SimulationDashboard";
import { UserDashboard } from "./Components/Dashboard/Routes/UserDashboard";
import { Detail } from "./Components/Detail/Detail";
import { DetailRounds } from "./Components/Detail/DetailRounds";
import FormLogin from "./Components/Forms/FormLogin/FormLogin";
import FormRestration from "./Components/Forms/FormRegistration/FormRegistration";
import { Home } from "./Components/HomeComponent/Home";
import { LandingPage } from "./Components/LandingPage/LandingPage";
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
      <Route element={<LoggedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/detail/:stage/:id" element={<DetailRounds />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<UserDashboard />} />
          <Route exact path="/dashboard/bets/" element={<BetDashboard />} />
          <Route exact path="/dashboard/matchs/" element={<MatchDashboard />} />
          <Route exact path="/dashboard/simulation" element={<Simulation />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
