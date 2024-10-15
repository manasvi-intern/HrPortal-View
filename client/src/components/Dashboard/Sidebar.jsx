import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch the user data from backend (replace with your backend API call)
    fetch('/api/user') 
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="bg-[#025686] shadow-md text-white h-screen w-64 flex flex-col items-center">
      <img src="/inknowtech-logo.png" alt="Company Logo" className="w-33 h-18 my-4 pb-10" />
      <img src={userData.profilePic || '/profile-picture.webp'} alt="Profile" className="w-20 h-20 rounded-full mb-4 " />
      <h2 className="text-xl pb-4 font-bold">Name{userData.name}</h2>
      <p className="text-lg pb-4">Role{userData.role}</p>
      <p className="text-lg pb-4">Email{userData.email}</p>
      <div className=" flex flex-col items-center">
        <a href="/settings" className="text-lg text-white hover:text-orange-500 pb-4">Settings</a>
        <button className="text-lg text-white hover:text-orange-500 pb-4">Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
