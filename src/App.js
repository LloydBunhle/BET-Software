import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./Helper/Private";
import Navbar from './Components/navbar/Navbar'
import HomePage from "./Components/HomePage";
import LoginPage from './Components/LoginPage'
import FeaturePage from './Components/FeaturePage'
import NewFeature from './Components/NewFeature'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/new" element={<NewFeature />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
