import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Layouts/Navbar';
import LabeledInput from '../../components/Forms/LabeledInput';

const ViewRequestForm = () => {
  const { requestId } = useParams();

  const [details, setDetails] = useState({
    raisedBy: '', location: '', dateOfRequest: '', clientProject: '', projectDetails: '', position: '', positionLevel: '', numOfPositions: '', replacement: '',
        replacementDetails: '', vacancyReason: '', experienceRange: '', salaryBudget: '', qualification: '', certification: '', skillset: '', otherBenefit: '', targetDate: '', 
  });


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch candidate and evaluation details
  useEffect(() => {
    if (!requestId) {
        setError('Request ID is required');
        setLoading(false);
        return;
    }

    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/request/${requestId}`);
        console.log('Fetched details:', response.data);

        // Map the API response to the frontend state structure
        const {
          raised_by_name, location, date_of_request, project_name, project_details, designation_name, level_name, num_of_positions, replacement_type_name,
        replacement_details, vacancy_reason, exp_range_name, ctc_range_value, qualification_name, certification_name, skillset, other_benefit, target_date
        } = response.data;

        setDetails({
          raisedBy: raised_by_name,
          location: location,
          dateOfRequest: date_of_request,
          clientProject: project_name,
          projectDetails: project_details,
          position: designation_name,
          positionLevel: level_name,
          numOfPositions: num_of_positions,
          replacement: replacement_type_name,
          replacementDetails: replacement_details,
          vacancyReason: vacancy_reason,
          experienceRange: exp_range_name,
          salaryBudget: ctc_range_value,
          qualification: qualification_name,
          certification: certification_name,          
          skillset: skillset,
          otherBenefit: other_benefit,
          targetDate: target_date
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
        setError('Failed to load candidate details');
        setLoading(false);
      }
    };

    fetchDetails();
  }, [requestId]);


  if (loading) return <div><Navbar /> Loading...</div>;
  if (error) return <div><Navbar /> Error: {error}</div>;


  // Destructure details for easier access
  const {
    raisedBy, location, dateOfRequest, clientProject, projectDetails, position, positionLevel, numOfPositions, replacement,
        replacementDetails, vacancyReason, experienceRange, salaryBudget, qualification, certification, skillset, otherBenefit, targetDate,
  } = details;


  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl font-semibold mb-8 text-[#055484]">Manpower Requisition Form</h1>
        <div className="space-y-8">
            <LabeledInput label="Raised By" name="raisedBy" value={raisedBy} rows={1} readOnly />
            <LabeledInput label="Location" name="location" value={location} rows={1} readOnly />
            <LabeledInput label="Date of Request" name="dateOfRequest" value={dateOfRequest} rows={1} readOnly />
            <LabeledInput label="Client/Project" name="clientProject" value={clientProject} rows={1} readOnly />
            <LabeledInput label="Please Specify Project Name/Site/Team etc for this Manpower Request" name="projectDetails" value={projectDetails} rows={1} readOnly />
            <LabeledInput label="Position/Designation for Requirement"  rows={4} name="position" value={position} readOnly />
            <LabeledInput label="Position Level"  rows={4} name="positionLevel" value={positionLevel} readOnly />
            <LabeledInput label="No. of Positions" rows={4} name="numOfPositions" value={numOfPositions} readOnly />
            <LabeledInput label="Replacement or New Appointment" rows={4} name="replacement" value={replacement} readOnly />
            <LabeledInput label="If Replacement- (mention-Name/ DO Resignation/ LWD)" name="replacementDetails" rows={1} value={replacementDetails} readOnly />
            <LabeledInput label="Specify Reason for Vacancy" rows={1} name="vacancyReason" value={vacancyReason} readOnly />
            <LabeledInput label="Experience Range" rows={4} name="experienceRange" value={experienceRange} readOnly />
            <LabeledInput label="CTC/ Salary Budget or Range" rows={1} name="salaryBudget" value={salaryBudget} readOnly />
            <LabeledInput label="Qualification" rows={1} name="qualification" value={qualification} readOnly />  
            <LabeledInput label="Certification" rows={1} name="certification" value={certification} readOnly />
            <LabeledInput label="Skills Set Summary" rows={1} name="skillset" value={skillset} readOnly />
            <LabeledInput label="Any Other Benefit - specify" rows={1} name="otherBenefit" value={otherBenefit} readOnly />
            <LabeledInput label="Target Date to Refill" rows={1} name="targetDate" value={targetDate} readOnly />
        </div>
      </div>
    </div>
  );
};


export default ViewRequestForm;

