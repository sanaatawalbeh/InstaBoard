import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
function App() {

  return (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
  );
}

export default App;
