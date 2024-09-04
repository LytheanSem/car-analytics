import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HighlightedCars from "./pages/HighlightedCars";

function App() {
  return (
    <Router>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/car-analytic">Dashboard</Link>
            </li>
            <li>
              <Link to="/highlighted-cars">Highlighted Cars</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        {/* Redirect from the base URL to the Dashboard */}
        <Route path="/" element={<Navigate to="/car-analytic" replace />} />
        <Route path="/car-analytic" element={<Dashboard />} />
        <Route path="/highlighted-cars" element={<HighlightedCars />} />
      </Routes>
    </Router>
  );
}

export default App;
