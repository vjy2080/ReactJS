import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Students: 30 },
  { name: 'Feb', Students: 45 },
  { name: 'March', Students: 60 },
  { name: 'April', Students: 80 },
  { name: 'May', Students: 55 },
  { name: 'June', Students: 65 },
  { name: 'July', Students: 80 },
  { name: 'Aug', Students: 40 },
  { name: 'Sept', Students: 88 },
  { name: 'Oct', Students: 65 },
  { name: 'Nov', Students: 10 },
  { name: 'Dec', Students: 90 },
];

const LineChartComponent = () => {
  return (
    <LineChart className='mt-5' width={800} height={300} data={data}>
      <XAxis dataKey="name" stroke='purple' />
      <YAxis stroke='purple' />
      <CartesianGrid stroke="black" />
      <Line type="monotone" dataKey="Students" stroke="red" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineChartComponent;
