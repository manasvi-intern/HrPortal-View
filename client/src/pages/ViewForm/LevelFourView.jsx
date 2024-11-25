import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Layouts/Navbar';
import Textarea from '../../components/Forms/Textarea';

const LevelFourView = () => {
  const { candidateId } = useParams();

  const [details, setDetails] = useState({
    candidateName: '',
    positionApplied: '',
    source: '',
    interviewer: '',
    interviewDateTime: '',
    communication: '',
    attitude: '',
    fitToWork: '',
    cctc: '',
    ectc: '',
    reasonForLeaving: '',
    proceedToNextLevel: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch candidate and evaluation details
  useEffect(() => {
    if (!candidateId) {
        setError('Candidate ID is required');
        setLoading(false);
        return;
    }

    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/hr-eval/${candidateId}`);
        console.log('Fetched details:', response.data);


        // Map the API response to the frontend state structure
        const {
          candidate_name,
          position_applied,
          source,
          interviewer,
          interviewdatetime,
          communication,
          attitude,
          fit_to_work,
          cctc,
          ectc,
          reasonforleaving,
          proceedtonextlevel
        } = response.data;

        setDetails({
          candidateName: candidate_name,
          positionApplied: position_applied,
          source: source,
          interviewer: interviewer,
          interviewDateTime: interviewdatetime,
          communication: communication,
          attitude: attitude,
          fitToWork: fit_to_work,
          cctc: cctc,
          ectc: ectc,
          reasonForLeaving: reasonforleaving,
          proceedToNextLevel: proceedtonextlevel
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
        setError('Failed to load candidate details');
        setLoading(false);
      }
    };

    fetchDetails();
  }, [candidateId]);


  if (loading) return <div><Navbar /> Loading...</div>;
  if (error) return <div><Navbar /> Error: {error}</div>;


  // Destructure details for easier access
  const {
    candidateName,
    positionApplied,
    source,
    interviewer,
    interviewDateTime,
    communication,
    attitude,
    fitToWork,
    cctc,
    ectc,
    reasonForLeaving,
    proceedToNextLevel,
  } = details;


  // Format interview date and time
  const formattedInterviewDateTime = interviewDateTime
    ? new Date(interviewDateTime).toLocaleString()
    : 'N/A';


  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-2xl mx-auto p-4 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl font-semibold mb-8 text-[#055484] p-6">HR Evaluation (Level-4) of {candidateName} </h1>
        <div className="space-y-8">
          <div>
            <Textarea label="Name of the Candidate" name="candidateName" value={candidateName} rows={1} readOnly />
          </div>
          <div>
            {/* <h2 className="font-bold text-lg">Position Applied:</h2> */}
            {/* <p>{positionApplied}</p> */}
            <Textarea label="Position Applied" name="positionApplied" value={positionApplied} rows={1} readOnly />
            </div>
          <div>
            <Textarea label="Source of the Candidate" name="source" value={source} rows={1} readOnly />
          </div>
          <div>
            {/* <h2 className="font-bold text-lg">Interviewer:</h2>
            <p>{interviewer}</p> */}
                  <Textarea label="Interviewer" name="interviewer" value={interviewer} rows={1} readOnly />
          </div>
          <div>
            {/* <h2 className="font-bold text-lg">Date & Time of Interview:</h2>
            <p>{formattedInterviewDateTime}</p> */}
           <Textarea label="Interview Date & Time" name="formattedInterviewDateTime" value={formattedInterviewDateTime} rows={1} readOnly />
           </div>
          <div>
            {/* <h2 className="font-bold text-lg">Communication:</h2>
            <p>{communication}</p> */}
        <Textarea label="Communication" placeholder="Describe communication skills" rows={4} name="communication" value={communication} readOnly />
        </div>
          <div>
            {/* <h2 className="font-bold text-lg">Attitude:</h2>
            <p>{attitude}</p> */}
        <Textarea label="Attitude" placeholder="Describe attitude" rows={4} name="attitude" value={attitude} readOnly />
        </div>
          <div>
            {/* <h2 className="font-bold text-lg">Fitment to Work:</h2>
            <p>{fitToWork}</p> */}
        <Textarea label="Fitment to Work" placeholder="Describe fitment to work" rows={4} name="fitToWork" value={fitToWork} readOnly />


          </div>
          <div>
            {/* <h2 className="font-bold text-lg">CCTC:</h2>
            <p>{cctc}</p> */}
         <Textarea label="CCTC" name="cctc" rows={1} value={cctc} readOnly />
          </div>
          <div>
            {/* <h2 className="font-bold text-lg">ECTC:</h2>
            <p>{ectc}</p> */}
        <Textarea label="ECTC" placeholder="Provide ECTC" rows={1} name="ectc" value={ectc} readOnly />
         </div>
          <div>
            {/* <h2 className="font-bold text-lg">Reason for Leaving Current Company:</h2>
            <p>{reasonForLeaving}</p> */}
        <Textarea label="Reason for Leaving Current Company" placeholder="Provide reason for leaving" rows={4} name="reasonForLeaving" value={reasonForLeaving} readOnly />
         </div>
          <div>
            {/* <h2 className="font-bold text-lg">Can the candidate proceed to the next level?</h2>
            <p>{proceedToNextLevel ? 'Yes' : 'No'}</p> */}
        <Textarea label="Proceed to next level?" placeholder="proceed to next level?" rows={1} name="proceedToNextLevel" value={proceedToNextLevel ? 'Yes' : 'No'} readOnly />
        </div>
        </div>
      </div>
    </div>
  );
};


export default LevelFourView;
