import React from 'react';
import Navbar from '../../components/Layouts/Navbar';

const CurrentJobs = () => {
    return(
        <div>
            <Navbar />
            <div style={{
                textAlign: 'center', 
                fontWeight: 'bold',  
                margin: '220px 0'     
            }}
            >Current Jobs</div>;
        </div>
    ); 
  };
export default CurrentJobs;
  
