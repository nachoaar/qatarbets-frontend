import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/HomeComponent/Home";
import { LandingPage } from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
