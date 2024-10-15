import React, { useState } from 'react';
import Navbar from '../components/Layouts/Navbar';
import RequestForm from '../components/Forms/RequestForm'; 

const RequestFormPage = () => {
  const [formData, setFormData] = useState({
    raisedBy: '',
    location: '',
    dateOfRequest: '',
    clientProject: '',
    projectDetails: '',
    position: '',
    positionLevel: '',
    noPositions: '',
    replacement: '',
    replacementDetails: '',
    vacancyReason: '',
    experienceRange: '',
    salaryBudget: '',
    qualification:'',
    certification: '',
    skillset: '',
    otherBenefit: '',
    targetDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.raisedBy || !formData.location || !formData.dateOfRequest || !formData.clientProject 
      || !formData.projectDetails || !formData.position || !formData.positionLevel || !formData.noPositions
      ||  !formData.replacement || !formData.vacancyReason || !formData.experienceRange || !formData.replacementDetails
      || !formData.salaryBudget || !formData.qualification || !formData.certification || !formData.skillset
      || !formData.targetDate || !formData.otherBenefit
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <form onSubmit={handleSubmit}>
          <RequestForm formData={formData} setFormData={setFormData} /> 
        </form>
      </div>
    </div>
  );
};

export default RequestFormPage;
