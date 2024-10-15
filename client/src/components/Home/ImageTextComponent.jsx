// // ImageTextComponent.jsx

// import React from 'react';

// const ImageTextComponent = () => {
//     return (
//         <div className="flex items-center justify-between p-6">
//             <div className="w-1/2 text-6xl font-inria" style={{color:'#025685'}}>
//                 <p className="font-bold ">
//                 Smart Solutions for </p>
//                 <span className="font-jacques">Stress-Free </span>
//                 <span className="font-bold ">Hiring
//                 </span>
//             </div>
//             <div className=" pl-20">
//                 <img 
//                     src="/Picture.png" 
//                     alt="Cover image" 
//                 />
//             </div>
//         </div>
//     );
// };

// export default ImageTextComponent;

import React from 'react';

const ImageTextComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between p-6">
            <div className="w-full lg:w-1/2 text-4xl lg:text-6xl font-inria" style={{ color: '#025685' }}>
                <p className="font-bold">Smart Solutions for </p>
                <span className="font-jacques">Stress-Free </span>
                <span className="font-bold">Hiring</span>
            </div>
            <div className="mt-6 lg:mt-0 lg:pl-20 w-full lg:w-1/2 flex justify-center">
                <img 
                    src="/Picture.png" 
                    alt="Cover image" 
                    className="w-3/4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm h-auto object-contain" 
                />
            </div>
        </div>
    );
};

export default ImageTextComponent;