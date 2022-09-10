import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./Components/Detail/Detail";
import FormLogin from "./Components/Forms/FormLogin/FormLogin";
import FormRestration from "./Components/Forms/FormRegistration/FormRegistration";
import { Home } from "./Components/HomeComponent/Home";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import {PaymentForm} from "./Components/PaymentForm/PaymentForm";

function App() {

  /* axios.get('http://localhost:3001/validate', {withCredentials: true})
  .then((res) => {
    console.log(res.data);
  }) */

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route exact path="/register" element={<FormRestration />} />
      <Route exact path="/login" element={<FormLogin />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route exact path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
