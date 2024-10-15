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
import Nav from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import SettingsPage from './pages/SettingsPage';
import ProjectManagerDB from './pages/Dashboard/ProjectManagerDB';
import HRDB from './pages/Dashboard/HRDB';
import RecruiterDB from './pages/Dashboard/RecruiterDB';
import CooDB from './pages/Dashboard/CooDB';
import OfferLetterRelease from './components/Dashboard/OfferLetterRelease';
import StatusUpdate from './components/Dashboard/StatusUpdate';
import Tracker from './pages/RecruitmentProcess';
// import CooApproval from './components/Dashboard/CooApproval';
import RequestForm from './pages/RequestForm';
import CurrentJobs from './pages/Jobs/CurrentJobs';
import PastJobs from './pages/Jobs/PastJobs';
import ProjectList from './pages/ProjectList';
import LevelOneFb from './components/Forms/LevelOneFb';
import LevelTwoFb from './components/Forms/LevelTwoFb';
import LevelThreeFb from './components/Forms/LevelThreeFb';
import LevelFourFb from './components/Forms/LevelFourFb';
import LevelOneView from './pages/FeedbackForms/LevelOneView';
import LevelTwoView from './pages/FeedbackForms/LevelTwoView';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pmdb" element={<ProjectManagerDB />} />
        <Route path="/hr-db" element={<HRDB />} />
        <Route path="/recruiter-db" element={<RecruiterDB />} />
        <Route path="/coo-db" element={<CooDB />} />
        <Route path="/offer-letter-release" element={<OfferLetterRelease />} />
        <Route path="/status-update" element={<StatusUpdate />} />
        {/* Uncomment if CooApproval is needed */}
        {/* <Route path="/coo-approval" element={<CooApproval />} /> */}
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/jobs/current-jobs" element={<CurrentJobs />} />
        <Route path="/jobs/past-jobs" element={<PastJobs />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/feedback/level-one" element={<LevelOneFb />} />
        <Route path="/feedback/level-two" element={<LevelTwoFb />} />
        <Route path="/feedback/level-three" element={<LevelThreeFb />} />
        <Route path="/feedback/level-four" element={<LevelFourFb />} />
        <Route path="/form-view/level-one" element={<LevelOneView />} />
        <Route path="/form-view/level-two" element={<LevelTwoView />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

