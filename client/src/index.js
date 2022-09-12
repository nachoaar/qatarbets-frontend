import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from "react-cookie";

/* import dotenv from "dotenv";
dotenv.config(); */

export const DOMAIN = process.env.REACT_APP_DOMAIN
export const axiosURL = process.env.REACT_APP_API || "https://qatarbets-backend-production-ab54.up.railway.app" || "http://localhost:3000";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
  <ChakraProvider >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
