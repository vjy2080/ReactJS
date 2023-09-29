import React from 'react';

const UserStatistics = () => {
  // Sample user statistics data (replace with actual data)
  const userStats = {
    totalUsers: 100,
    activeUsers: 80,
    newUsers: 5,
  };

  return (
    <>
      <h2 className='mb-3 text-center text-dark mt-5'>User Statistics</h2>
      <div className="user-statistics d-flex justify-content-between my-3">
        <div className='border border-dark p-3 w-100 d-flex  justify-content-center'>
          <p className='align-items-center mb-0'>Total Users: {userStats.totalUsers}</p>
        </div>
        <div className='border border-dark p-3 w-100 d-flex  justify-content-center'>
          <p className='align-items-center mb-0'>Active Users: {userStats.activeUsers}</p>
        </div>
        <div className='border border-dark p-3 w-100 d-flex  justify-content-center'>
          <p className='align-items-center mb-0'>New Users Today: {userStats.newUsers}</p>
        </div>
      </div>
    </>
  );
};

export default UserStatistics;
