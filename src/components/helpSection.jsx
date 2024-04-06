import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HelpSection = () => {
  const [helpData, setHelpData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('data.json');
        setHelpData(response.data.helpSection);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-white py-12 px-4 md:py-16 md:px-8 mt-12">
      <h2 className="text-2xl text-[#001435] font-medium mb-6">More ways to get help</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {helpData && helpData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
           
            <img width="40" height="40" src={item.icon} alt="help icons" className='' />
            <h3 className="text-xl font-medium text-[#005EA6]">{item.title}</h3>
            <p className="text-gray-600 text-center w-[200px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
