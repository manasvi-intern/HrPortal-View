import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Install axios if not installed: npm install axios
import Navbar from '../../components/Layouts/Navbar';
import Textarea from '../../components/Forms/Textarea';
import Dropdown from '../../components/Forms/Dropdown';
import DateTimeInput from '../../components/Forms/DateTimeInput';

const LevelFourFb = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    interviewer: '',
    interviewDateTime: '',
    communication: '',
    attitude: '',
    fitToWork: '',
    cctc: '',
    ectc: '',
    reasonForLeaving: '',
    proceedToNextLevel: '', 
  });
  const [candidateInfo, setCandidateInfo] = useState({
    candidateName: '',
    positionApplied: '',
    source: '',
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    interviewers: [],
    cctcOptions: [],
  });
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state 
  
  
  // Fetch dropdown options when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      if (!candidateId) {
        console.error('Candidate ID is missing');
        setError('Candidate ID is required');
        setLoading(false);
        return;
      }
      try {
          // Fetch candidate details
          const candidateResponse = await axios.get(`http://localhost:5000/api/candidates/${candidateId}`);
          const candidate = candidateResponse.data;
          setFormData((prevFormData) => ({
              ...prevFormData,
              candidateName: candidate.candidate_name,
              positionApplied: candidate.position_applied,
              source: candidate.source, // Adjust based on your data
          }));
       const dropdownResponse = await axios.get('http://localhost:5000/api/hr-eval/options'); // Adjust URL if necessary
        setDropdownOptions({
          interviewers: dropdownResponse.data.interviewers.map(int => ({ value: int.interviewer_name, label: int.interviewer_name })),
          cctc: dropdownResponse.data.cctc.map(ctc => ({ value: ctc.cctc_value, label: ctc.cctc_value }))
        });
        setLoading(false);
      }
      catch (error)  {
        console.error('Error fetching dropdown options:', error);
        setError('Failed to load dropdown options');
        setLoading(false);
      }
  };
  fetchData();
}, [candidateId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      candidateId,
    };
    try{
    await axios.post('http://localhost:5000/api/hr-eval', dataToSubmit);
        alert('Form submitted successfully!');
        navigate('/hr-db');
      }
      catch (error) {
        alert('error submitting the form!');
  };
  }; 
  if (loading) { return  <div>  <Navbar />  Loading...</div> }
  if (error) { return  <div>  <Navbar />  error : {error} </div> }

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-2xl mx-auto p-4 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl font-semibold mb-8 text-[#055484] p-6">HR Evaluation(Level-4) </h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Name of the Candidate */}
          <Textarea label="Name of the Candidate"  name="candidateName" value={formData.candidateName} readOnly />
          <Textarea label="Position Applied" name="positionApplied" value={formData.positionApplied} readOnly />
          {/* Source of the Candidate */}
         <Textarea label="Source of the Candidate" name="source" value={formData.source}  readOnly />
      {/* interviewer */}
      <Dropdown label="Interviewer" name="interviewer" options={dropdownOptions.interviewers?.map((int, index) => ({ value: int.value, label: int.label, key: index }))} value={formData.interviewer}  onChange={(e) => setFormData({ ...formData, interviewer: e.target.value })} />
       {/* Date & Time of Interview */}
          <DateTimeInput label="Date & Time of Interview" name="interviewDateTime" value={formData.interviewDateTime} onChange={handleInputChange} />
          {/* Communication */}
          <Textarea label="Communication" placeholder="Describe communication skills" rows={4} name="communication" value={formData.communication} onChange={handleInputChange} />
           {/* Attitude */}
          <Textarea label="Attitude" placeholder="Describe attitude" rows={4} name="attitude" value={formData.attitude} onChange={handleInputChange} />
          {/* Fitment to Work */}
          <Textarea label="Fitment to Work" placeholder="Describe fitment to work" rows={4} name="fitToWork" value={formData.fitmentToWork} onChange={handleInputChange} />
          {/* CCTC */}
         <Dropdown label="CCTC" name="cctc" options={dropdownOptions.cctc?.map((ctc, index) => ({ value: ctc.value, label: ctc.label, key: index }))} value={formData.cctc} onChange={(e) => setFormData({ ...formData, cctc: e.target.value })} />
          {/* ECTC */}
          <Textarea label="ECTC" placeholder="Provide ECTC" rows={1} name="ectc" value={formData.ectc} onChange={handleInputChange} />
          {/* Reason for Leaving */}
          <Textarea label="Reason for Leaving Current Company" placeholder="Provide reason for leaving" rows={4} name="reasonForLeaving" value={formData.reasonForLeaving} onChange={handleInputChange} />
          {/* Proceed to Next Level */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Can the candidate proceed to the next level?</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="proceedToNextLevel" value="yes" checked={formData.proceedToNextLevel === 'yes'} onChange={handleInputChange} className="form-radio text-[#055484]" style={{ accentColor: '#055484' }} />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="proceedToNextLevel" value="no" checked={formData.proceedToNextLevel === 'no'} onChange={handleInputChange} className="form-radio text-[#055484]" style={{ accentColor: '#055484' }} />
                <span>No</span>
              </label>
            </div>
          </div>
         {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="py-2 px-6 bg-[#055484] font-semibold text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LevelFourFb;
