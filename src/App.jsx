import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Scissor/LandingPage';
import URLShorteningPage from './pages/Scissor/URLShorteningPage';
import CustomURLsPage from './pages/Scissor/CustomURLsPage';
import QRCodeGenerationPage from './pages/Scissor/QRCodeGenerationPage';
import AnalyticsPage from './pages/Scissor/AnalyticsPage';
import LoginPage from './components/Login';
import SignupPage from './components/SignUp'; 

// App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/url-shortening" element={<URLShorteningPage />} />
        <Route path="/custom-urls" element={<CustomURLsPage />} />
        <Route path="/qr-code-generation" element={<QRCodeGenerationPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
