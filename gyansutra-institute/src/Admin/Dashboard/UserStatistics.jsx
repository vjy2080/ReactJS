import React from 'react';

const UserStatistics = () => {
  // Sample user statistics data (replace with actual data)
  const userStats = {
    totalUsers: 100,
    activeUsers: 80,
    newUsers: 5,
  };

  return (
    <div className="user-statistics">
      <h2>User Statistics</h2>
      <p>Total Users: {userStats.totalUsers}</p>
      <p>Active Users: {userStats.activeUsers}</p>
      <p>New Users Today: {userStats.newUsers}</p>
    </div>
  );
};

export default UserStatistics;
