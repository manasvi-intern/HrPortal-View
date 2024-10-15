import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Layouts/Navbar';

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({
    profilePicture: '', // To store the profile picture URL from backend
    name: '',
    role: '',
    email: '',
    password: '', // Password fetched from the backend
  });

  const [editPassword, setEditPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Fetch profile data from the backend here
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/user-profile'); // API endpoint to get profile data
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handlePasswordChange = () => {
    // Update password in the backend here
    const updatePassword = async () => {
      try {
        const response = await fetch('/api/update-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: newPassword }),
        });

        if (response.ok) {
          alert('Password updated successfully');
          setEditPassword(false);
          setProfileData({ ...profileData, password: newPassword });
        } else {
          alert('Failed to update password');
        }
      } catch (error) {
        console.error('Error updating password:', error);
      }
    };

    updatePassword();
  };

  return (
    <div>
        <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen p-4  ">
      <div className="w-full max-w-4xl bg-white   rounded-lg p-6">
        <div className="flex space-x-10">
          {/* Left section: Profile picture */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              {/* Display default profile icon if no profile picture is available */}
              {profileData.profilePicture ? (
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="w-full h-full text-gray-400" />
              )}
            </div>
          </div>

          {/* Right section: User details */}
          <div className="w-2/3 space-y-6">
            {/* Name */}
            <div className="flex items-center bg-[#C0EBF5] rounded p-2">
              <span className="font-semibold text-gray-700 w-24">Name:</span>
              <span>{profileData.name}</span>
            </div>

            {/* Role */}
            <div className="flex items-center bg-[#C0EBF5] rounded p-2">
              <span className="font-semibold text-gray-700 w-24">Role:</span>
              <span>{profileData.role}</span>
            </div>

            {/* Email */}
            <div className="flex items-center bg-[#C0EBF5] rounded p-2">
              <span className="font-semibold text-gray-700 w-24">Email:</span>
              <span>{profileData.email}</span>
            </div>

            {/* Password */}
            <div className="flex items-center bg-[#C0EBF5] rounded p-2 justify-between">
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 w-24">Password:</span>
                {!editPassword ? (
                  <span>{profileData.password}</span>
                ) : (
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border rounded px-2 py-1 w-40"
                  />
                )}
              </div>
              {!editPassword && (
                <FaEdit
                  onClick={() => setEditPassword(true)}
                  className="text-black-500 hover:text-blue-700 cursor-pointer"
                />
              )}
              {editPassword && (
                <button
                  onClick={handlePasswordChange}
                  className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
