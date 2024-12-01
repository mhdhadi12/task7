import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Activity } from "./pages/activity";
import { Contact } from "./pages/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
