// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // <Home />
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       </Routes>
//       </Router>  
//   );
// }

// export default App

// ./App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layouts/Footer';
import SettingsPage from './pages/SettingsPage';
import Home from './pages/Home';
import ProjectManagerDB from './pages/Dashboard/ProjectManagerDB';
import HRDB from './pages/Dashboard/HRDB';
import RecruiterDB from './pages/Dashboard/RecruiterDB';
import CooDB from './pages/Dashboard/CooDB';
import OfferLetterRelease from './components/Dashboard/OfferLetterRelease';
import StatusUpdate from './components/Dashboard/StatusUpdate';
import CooApproval  from './components/Dashboard/CooApproval';
import RequestForm from './pages/RequestForm'; 
import CurrentJobs from './pages/Jobs/CurrentJobs'; 
import PastJobs from './pages/Jobs/PastJobs'; 
import LevelOneFb from './components/Forms/LevelOneFb'; 
import LevelTwoFb from './components/Forms/LevelTwoFb';
import LevelThreeFb from './components/Forms/LevelThreeFb'; 
import LevelFourFb from './components/Forms/LevelFourFb';
import RecruitmentProcess from './pages/RecruitmentProcess';
import Documentation from './components/Forms/Documentation';
import CandidateList from './pages/Jobs/CandidateList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pm-db" element={<ProjectManagerDB />} />
        <Route path="/hr-db" element={<HRDB />} />
        <Route path="/recruiter-db" element={<RecruiterDB />} /> 
        <Route path="/coo-db" element={<CooDB />} />
        <Route path="/offer-letter-release" element={<OfferLetterRelease />} />
        <Route path="/status-update" element={<StatusUpdate />} />
        <Route path="/coo-approval" element={<CooApproval />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/jobs/current-jobs" element={<CurrentJobs />} />
        <Route path="/jobs/past-jobs" element={<PastJobs />} />
        <Route path="/tracker" element={<RecruitmentProcess />} />
        <Route path="/feedback/level-one" element={<LevelOneFb />} />
        <Route path="/feedback/level-two" element={<LevelTwoFb />} />
        <Route path="/feedback/level-three" element={<LevelThreeFb />} />
        <Route path="/feedback/level-four" element={<LevelFourFb />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/candidate-list" element={<CandidateList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
