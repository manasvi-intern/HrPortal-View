import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Layouts/Navbar';
import Textarea from '../../components/Forms/Textarea';
import Dropdown from '../../components/Forms/Dropdown';
import DateInput from '../../components/Forms/DateInput';
import LabeledInput from '../../components/Forms/LabeledInput';

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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal State
  const [modal, setModal] = useState({ show: false, message: '', type: '' });

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
        const candidateResponse = await axios.get(`http://localhost:5000/api/candidates/${candidateId}`);
        const candidate = candidateResponse.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          candidateName: candidate.candidate_name,
          positionApplied: candidate.position_applied,
          source: candidate.source,
        }));
        const dropdownResponse = await axios.get('http://localhost:5000/api/hr-eval/options');
        setDropdownOptions({
          interviewers: dropdownResponse.data.interviewers.map(int => ({ value: int.interviewer_name, label: int.interviewer_name })),
          cctc: dropdownResponse.data.cctc.map(ctc => ({ value: ctc.cctc_value, label: ctc.cctc_value })),
        });
        setLoading(false);
      } catch (error) {
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
    const dataToSubmit = { ...formData, candidateId };
    try {
      await axios.post('http://localhost:5000/api/hr-eval', dataToSubmit);
      setModal({ show: true, message: 'Form submitted successfully!', type: 'success' });
      setTimeout(() => navigate('/hr-db'), 4000); // Navigate after 4 seconds
    } catch (error) {
      setModal({ show: true, message: 'Error submitting the form!', type: 'error' });
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Navbar />
        error : {error}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl font-semibold mb-8 text-[#055484]">HR Evaluation (Level-4)</h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <LabeledInput label="Name of the Candidate" name="candidateName" value={formData.candidateName} readOnly />
          <LabeledInput label="Position Applied" name="positionApplied" value={formData.positionApplied} readOnly />
          <LabeledInput label="Source of the Candidate" name="source" value={formData.source} readOnly />
          <Dropdown label="Interviewer" name="interviewer" options={dropdownOptions.interviewers} value={formData.interviewer} onChange={(e) => setFormData({ ...formData, interviewer: e.target.value })} />
          <DateInput label="Date & Time of Interview" name="interviewDateTime" value={formData.interviewDateTime} onChange={handleInputChange} />
          <Textarea label="Communication" placeholder="Describe communication skills" rows={4} name="communication" value={formData.communication} onChange={handleInputChange} />
          <Textarea label="Attitude" placeholder="Describe attitude" rows={4} name="attitude" value={formData.attitude} onChange={handleInputChange} />
          <Textarea label="Fitment to Work" placeholder="Describe fitment to work" rows={4} name="fitToWork" value={formData.fitToWork} onChange={handleInputChange} />
          <Dropdown label="CCTC" name="cctc" options={dropdownOptions.cctc} value={formData.cctc} onChange={(e) => setFormData({ ...formData, cctc: e.target.value })} />
          <Textarea label="ECTC" placeholder="Provide ECTC" rows={1} name="ectc" value={formData.ectc} onChange={handleInputChange} />
          <Textarea label="Reason for Leaving Current Company" placeholder="Provide reason for leaving" rows={4} name="reasonForLeaving" value={formData.reasonForLeaving} onChange={handleInputChange} />
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Can the candidate proceed to the next level?</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="proceedToNextLevel" value="yes" checked={formData.proceedToNextLevel === 'yes'} onChange={handleInputChange} className="form-radio text-[#055484]" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="proceedToNextLevel" value="no" checked={formData.proceedToNextLevel === 'no'} onChange={handleInputChange} className="form-radio text-[#055484]" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="py-2 px-6 bg-[#055484] font-semibold text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {modal.show && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className={`text-xl font-semibold ${modal.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {modal.message}
            </h2>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="mt-4 px-4 py-2 bg-[#055484] text-white rounded hover:bg-[#033d6b]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelFourFb;