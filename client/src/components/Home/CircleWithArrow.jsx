// CircleWithArrow.jsx

// import React from 'react';

// const CircleWithArrow = ({ src, alt, isLast }) => (
//     <div className="flex flex-col items-center">
//         <div className="w-24 h-24 rounded-full flex items-center justify-center mb-2"> {/* Increased size */}
//             <img src={src} alt={alt} className="rounded-full w-full h-full object-cover" />
//         </div>
//         {/* Render arrow only if it's not the last circle */}
//         {!isLast && (
            

//         )}
//     </div>
// );

// CircleWithArrow.jsx
import React from 'react';

const CircleWithArrow = ({ src, alt, isLast }) => (
    <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-2">
            <img src={src} alt={alt} className="rounded-full w-full h-full object-cover" />
        </div>
        {/* Render arrow with line only if it's not the last circle */}
        {!isLast && (
            <div className="flex flex-col items-center">
                <div className="h-8 w-1 bg-black mb-0"></div> {/* Vertical line, margin-bottom set to 0 */}
                <svg
                    className="w-6 h-6 text-black -mt-1" // Arrow size and color, negative margin-top to reduce space
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7" // Downward arrow path
                    />
                </svg>
            </div>
        )}
    </div>
);

export default CircleWithArrow;
