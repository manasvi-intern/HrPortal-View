import React from "react";

const steps = [
  {
    level: "Level 1",
    title: "Communication check and fitment",
    description:
      "Focuses on assessing the candidate's communication skills and overall fit for the role, conducted by recruiter.",
    color: "bg-green-600",
    links: "/form-view/level-one",
  },
  {
    level: "Level 2",
    title: "Technical round assessment",
    description:
      "The technical interviewer evaluates the candidate's skills, knowledge, and problem-solving abilities, conducted by Project manager.",
    color: "bg-green-600",
    links: "/form-view/level-two",
  },
  {
    level: "Level 3",
    title: "Client round & Project Manager assessment",
    description:
      "Candidate's technical and interpersonal skills are evaluated by the client along with Project manager.",
    color: "bg-yellow-500",
    links: "/form-view/level-three",
  },
  {
    level: "Level 4",
    title: "HR Round",
    description:
      "Focuses on salary expectations, benefits, and finalizing compensation-related details to ensure alignment between the candidate and the organization.",
    color: "bg-gray-400",
    links: "/form-view/level-four",
  },
  {
    level: "Level 5",
    title: "COO Approval",
    description:
      "COO reviews the candidate's overall profile and feedback. If approved, the offer letter is generated and shared with the candidate, marking the conclusion of the recruitment process.",
    color: "bg-gray-400",
    links: "/request-form",
  },
];

const RecruitmentProcess = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-8 font-inria">
      {steps.map((step, index) => (
        <div key={index} className="relative w-full mb-8">
          <div className="flex items-center">
            {/* Arrow Indicator */}
            <div className="relative flex items-center">
              <div
                className={`arrow ${step.color} text-white flex items-center justify-center px-6 py-8`}
              >
                {step.level}
              </div>
            </div>
            {/* Step Information */}
            <div className="ml-6 text-left">
              <h3 className="text-2xl font-semibold font-jacques">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-1 ">{step.description}</p>
              <a href={step.links} className="text-blue-500 text-sm mt-1 block">
                Access Feedback
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecruitmentProcess;
