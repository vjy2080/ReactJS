import React from 'react';

const RecentActivity = () => {
  // Sample recent activity data (replace with actual data)
  const recentActivity = [
    'User John Doe registered.',
    'Product XYZ added to the store.',
    'User Sarah Smith logged in.',
  ];

  return (
    <div className="recent-activity">
      <h2 className='mt-5 text-dark mb-3'>Recent Activity</h2>
      <ul>
        {recentActivity.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
