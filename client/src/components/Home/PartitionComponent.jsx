// // PartitionComponent.jsx

// import React from 'react';
// import CircleWithArrow from './CircleWithArrow';

// const PartitionComponent = () => {
//     return (
//         <div className="flex justify-between p-6">
//             {/* Left Section */}
//             <div className="w-2/3 p-6 rounded-lg mr-4 shadow-lg flex items-center justify-center" style={{ backgroundColor: '#A8DDE1' }}>
//                 <p className="text-left text-2xl font-inria font-bold justify-center m-20" style={{color:'#025685'}}>
//                 The InKnowTech HR Portal is designed to simplify and automate the hiring and onboarding process. 
//                 It enables seamless collaboration between project managers, recruiters, and decision-makers, using AI-driven 
//                 candidate assessments and a structured multi-level interview process. The portal ensures efficient hiring and 
//                 smooth onboarding, providing an all-in-one solution for managing recruitment needs.
//                 </p>
//             </div>

//             {/* Right Section */}
//             <div className="w-1/5 bg-green-100 p-6 shadow-lg flex flex-col items-center bg-gradient-to-b from-[#FD8407] to-[#4DC8E3]">
//             <h2 className="text-2xl font-bold font-inria mb-4">Portal Roadmap</h2>
//             <div className="flex flex-col items-center">
//                 {/* Circles with arrows */}
//                 <CircleWithArrow src="/p.png" alt="Circle 1" isLast={false} />
//                 <CircleWithArrow src="/work.png" alt="Circle 2" isLast={false} />
//                 <CircleWithArrow src="/doc.png" alt="Circle 3" isLast={true} />
//             </div>
//         </div>
//         </div>
//     );
// };

// export default PartitionComponent;

// PartitionComponent.jsx

import React from 'react';
import CircleWithArrow from './CircleWithArrow';


const PartitionComponent = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between p-6">
            {/* Left Section */}
            <div className="w-full md:w-2/3 p-6 rounded-lg mb-4 md:mr-4 shadow-lg flex items-center justify-center" style={{ backgroundColor: '#A8DDE1' }}>
                <p className="text-left text-lg md:text-2xl font-inria font-bold justify-center m-4" style={{ color: '#025685' }}>
                    The InKnowTech HR Portal is designed to simplify and automate the hiring and onboarding process. 
                    It enables seamless collaboration between project managers, recruiters, and decision-makers, using AI-driven 
                    candidate assessments and a structured multi-level interview process. The portal ensures efficient hiring and 
                    smooth onboarding, providing an all-in-one solution for managing recruitment needs.
                </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/3 bg-green-100 p-6 shadow-lg flex flex-col items-center bg-gradient-to-b from-[#FD8407] to-[#4DC8E3]">
                <h2 className="text-2xl font-bold font-inria mb-4">Portal Roadmap</h2>
                <div className="flex flex-col items-center space-y-4">
                    {/* Circles with arrows */}
                    <CircleWithArrow src="/p.png" alt="Circle 1" isLast={false} />
                    <CircleWithArrow src="/work.png" alt="Circle 2" isLast={false} />
                    <CircleWithArrow src="/doc.png" alt="Circle 3" isLast={true} />
                </div>
            </div>
        </div>
    );
};

export default PartitionComponent;
