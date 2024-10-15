// AnalyticsBox.jsx (React Component)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RightTask = () => {
    const [stats, setStats] = useState({
        candidatesInterviewed: 0,
        positionsFilled: 0,
        offerAcceptanceRate: 0,
        averageSuccessRate: 0
    });

    useEffect(() => {
        // Fetch the statistics from the server
        axios.get('/api/analytics') // Replace with your actual API endpoint
            .then(response => {
                const data = response.data;
                setStats({
                    candidatesInterviewed: data.candidatesInterviewed,
                    positionsFilled: data.positionsFilled,
                    offerAcceptanceRate: data.offerAcceptanceRate,
                    averageSuccessRate: data.averageSuccessRate
                });
            })
            .catch(error => {
                console.error('Error fetching analytics:', error);
            });
    }, []);

    return (
        <div className="analytics-box p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-[#025686] mb-6">Recruitment Analytics</h2>
            <div className="grid grid-cols-1 gap-4">
            <div className="stat-item mb-4 flex justify-between p-4 bg-gray-100 rounded-md shadow-md">
                <strong>Candidates Interviewed:</strong> {stats.candidatesInterviewed}
            </div>
            <div className="stat-item mb-4 flex justify-between p-4 bg-gray-100 rounded-md shadow-md">
                <strong>Positions Filled:</strong> {stats.positionsFilled}
            </div>
            <div className="stat-item mb-4 flex justify-between p-4 bg-gray-100 rounded-md shadow-md">
                <strong>Offer Acceptance Rate:</strong> {stats.offerAcceptanceRate}%
            </div>
            <div className="stat-item flex justify-between p-4 bg-gray-100 rounded-md shadow-md">
                <strong>Average Interview Success Rate:</strong> {stats.averageSuccessRate}%
            </div>
            </div>
        </div>
    );
};

export default RightTask;
