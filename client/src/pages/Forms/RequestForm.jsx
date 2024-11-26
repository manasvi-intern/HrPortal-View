import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Layouts/Navbar';
import Dropdown from '../../components/Forms/Dropdown';
import Textarea from '../../components/Forms/Textarea';
import DateInput from '../../components/Forms/DateInput';


const RequestForm = () => {
  const [formData, setFormData] = useState({
        raisedBy: '', location: '', dateOfRequest: '', clientProject: '', projectDetails: '', position: '', positionLevel: '', numOfPositions: '', replacement: '',
        replacementDetails: '', vacancyReason: '', experienceRange: '', salaryBudget: '', qualification: '', certification: '', skillset: '', otherBenefit: '', targetDate: '', });

  const [dropdownOptions, setDropdownOptions] = useState({
    raisedBy: [], clientProject: [], position: [], positionLevel: [], replacement: [], experienceRange: [], qualification: [], certification: [], });

  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); // Popup state for success message
  const navigate = useNavigate();

  // Set the current date and time to the "Date of Request" field on component mount
  useEffect(() => {
    const currentDate = new Date();
    const options = {
      timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false, 
    };

    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const formattedDateParts = formatter.formatToParts(currentDate);
    const date = `${formattedDateParts[4].value}-${formattedDateParts[2].value}-${formattedDateParts[0].value}`; // YYYY-MM-DD
    const time = `${formattedDateParts[6].value}:${formattedDateParts[8].value}`; // HH:mm
    const formattedDateTime = `${date}T${time}`;

    setFormData({ ...formData, dateOfRequest: formattedDateTime });
  }, []);

  // Fetch dropdown options when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/request/dropdown-options')
      .then((response) => {
        setDropdownOptions({
          raisedBy: response.data.raisedBy.map(rby => ({ value: rby.raised_by_name, label: rby.raised_by_name })),
          clientProject: response.data.clientProject.map(pro => ({ value: pro.project_name, label: pro.project_name })),
          position: response.data.position.map(pos => ({ value: pos.designation_name, label: pos.designation_name })),
          positionLevel: response.data.positionLevel.map(lev => ({ value: lev.level_name, label: lev.level_name })),
          replacement: response.data.replacement.map(repl => ({ value: repl.replacement_type, label: repl.replacement_type })),
          experienceRange: response.data.experienceRange.map(er => ({ value: er.exp_range, label: er.exp_range })),
          qualification: response.data.qualification.map(qua => ({ value: qua.qualification_name, label: qua.qualification_name })),
          certification: response.data.certification.map(cert => ({ value: cert.certification_name, label: cert.certification_name })),
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dropdown options:', error);
        setError('Failed to load dropdown options');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data being sent:', formData);

    axios.post('http://localhost:5000/api/request', formData)
      .then((response) => {
        console.log('Request Raised successfully:', response.data);
        setShowPopup(true); // Show success popup
        setTimeout(() => {
          navigate('/pm-db');
        }, 4000); // Wait for 4 seconds
      })
      .catch((error) => {
        console.error('Error in raising the request:', error);
      });
  };

  // Display loading or error states
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Manpower Requisition Form</h2>
          <div>Loading dropdown options...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Manpower Requisition Form</h2>
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Manpower Requisition Form</h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          
          <Dropdown label="Raised By" name="raisedBy" options={dropdownOptions.raisedBy?.map((rby, index) => ({
          value: rby.value, label: rby.label, key: index, }))}
          value={formData.raisedBy} onChange={(e) => setFormData({ ...formData, raisedBy: e.target.value })} 
          placeholder="Select Raised By" />

          <Textarea label="Location" placeholder="Enter Location" rows={1} name="location" value={formData.location} onChange={handleInputChange} />

          <div className="flex items-center mb-4">
          <label htmlFor="dateOfRequest" className=" font-semibold w-1/4 text-lg mr-4" > Date of Request </label>
          <input type="datetime-local" id="dateOfRequest" name="dateOfRequest" value={formData.dateOfRequest} readOnly className="w-3/4 p-3 bg-gray-100" />
          </div>

          <Dropdown label="Client/Project" name="clientProject" options={dropdownOptions.clientProject.map((pro, index) => ({
          value: pro.value, label: pro.label, key: index, }))}
          value={formData.clientProject} onChange={(e) => setFormData({ ...formData, clientProject: e.target.value })}placeholder="Select Client/Project" />

          <Textarea label="Please Specify Project Name/Site/Team etc for this Manpower Request" placeholder="Enter details" rows={2} name="projectDetails" value={formData.projectDetails} onChange={handleInputChange} />

          <Dropdown label="Position/Designation for Requirement" name="position" options={dropdownOptions.position.map((pos, index) => ({
          value: pos.value, label: pos.label, key: index, }))}
          value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} placeholder="Select Position/Designation" />

          <Dropdown label="Position Level" name="positionLevel" options={dropdownOptions.positionLevel.map((lev, index) => ({
          value: lev.value, label: lev.label, key: index, }))}
          value={formData.positionLevel} onChange={(e) => setFormData({ ...formData, positionLevel: e.target.value })} placeholder="Select Position Level" />

          <Textarea label="No. of Positions" placeholder="Enter number of positions" rows={1} name="numOfPositions" value={formData.numOfPositions} onChange={(e) => { const { name, value } = e.target;
          if (/^\d*$/.test(value)) { setFormData({...formData, [name]: value, }); }}} />

          <Dropdown label="Replacement or New Appointment" name="replacement" options={dropdownOptions.replacement.map((repl, index) => ({
          value: repl.value, label: repl.label, key: index, }))}
          value={formData.replacement} onChange={(e) => setFormData({ ...formData, replacement: e.target.value })} placeholder="Select Replacement or New Appointment" />

          {formData.replacement && (
          <Textarea label="If Replacement- (mention-Name/ DO Resignation/ LWD)" placeholder="Enter details" rows={2} name="replacementDetails" value={formData.replacementDetails} onChange={handleInputChange} />)}

          <Textarea label="Specify Reason for Vacancy" placeholder="Enter reason" rows={1} name="vacancyReason" value={formData.vacancyReason} onChange={handleInputChange} />

          <Dropdown label="Experience Range" name="experienceRange" options={dropdownOptions.experienceRange.map((er, index) => ({
          value: er.value, label: er.label, key: index, }))}
          value={formData.experienceRange} onChange={(e) => setFormData({ ...formData, experienceRange: e.target.value })} placeholder="Select Experience Range" />

          <Textarea label="CTC/ Salary Budget or Range" placeholder="Enter CCTC" rows={1} name="salaryBudget" value={formData.salaryBudget} onChange={handleInputChange} />

          <Dropdown label="Qualification" name="qualification" options={dropdownOptions.qualification.map((qua, index) => ({
          value: qua.value, label: qua.label, key: index, }))}
          value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })} placeholder="Select Qualification" />

          <Dropdown label="Certification" name="certification" options={dropdownOptions.certification.map((cert, index) => ({
          value: cert.value, label: cert.label, key: index, }))}
          value={formData.certification} onChange={(e) => setFormData({ ...formData, certification: e.target.value })} placeholder="Select Certification" />

          <Textarea label="Skills Set Summary" placeholder="Enter skills" rows={2} name="skillset" value={formData.skillset} onChange={handleInputChange} />

          <Textarea label="Any Other Benefit - specify" placeholder="Enter benefits" rows={2} name="otherBenefit" value={formData.otherBenefit} onChange={handleInputChange} />

          <DateInput label="Target Date to Refill" name="targetDate" value={formData.targetDate} onChange={handleInputChange} />

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="py-2 px-6 bg-[#055484] font-semibold text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500">
              Submit
            </button>
          </div>
        </form>
      {/* Success Popup */}
      {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-green-600">Request Raised Successfully!</h3>
              <p className="text-gray-500 mt-2">You will be redirected shortly.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestForm;