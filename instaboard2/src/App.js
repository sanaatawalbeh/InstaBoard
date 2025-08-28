import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./components/Team/Team";
import LikedUsers from "./components/LikedUsers";
import Profile from "./components/Profile";
import NotFound from "./Pages/NotFound";
function App() {

  const [lightMode, setLightMode] = useState(false);

  return (
    <HashRouter>
      <Layout lightMode={lightMode} setLightMode={setLightMode}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/liked-users" element={<LikedUsers />} />
          <Route path="/profile/:uuid" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>{" "}
    </HashRouter>
  );
}

export default App;
