// Reusable Input Component
const InputField = ({ label, placeholder, type = "text", ...props }) => (
    <div className="flex items-center mb-4">
      <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
        {...props}
      />
    </div>
  );
  
  // Reusable Select Component
  const SelectField = ({ label, options, defaultValue = "", ...props }) => (
    <div className="flex items-center mb-4">
      <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
      <select
        className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
        defaultValue={defaultValue}
        {...props}
      >
        <option value="" disabled hidden>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
  
  // Main Form Component
  const CandidateForm = () => {
    const positionOptions = [
      { label: "Position 1", value: "position1" },
      { label: "Position 2", value: "position2" },
    ];
    const interviewerOptions = [
      { label: "Interviewer 1", value: "interviewer1" },
      { label: "Interviewer 2", value: "interviewer2" },
    ];
  
    return (
      <form>
        <InputField label="Name of the Candidate" placeholder="Enter candidate's name" />
        <SelectField label="Position Applied" options={positionOptions} />
        <SelectField label="Name of the Interviewer" options={interviewerOptions} />
        <InputField label="Date & Time of Interview" type="datetime-local" />
        <InputField label="Source of the Candidate" placeholder="Enter Source" />
      </form>
    );
  };
  
  export default CandidateForm;
  