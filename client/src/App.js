import { Routes, Route } from "react-router-dom";
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
      <Route exact path="/dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
