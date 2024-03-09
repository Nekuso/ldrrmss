import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Mobusebox: React.FC = () => {
  const numberOfUsers = 123; 

  return (
    <div className="h-[18vh] w-[20vw] rounded-xl border border-zinc-400 shadow-lg bg-zinc-200 mr-5 p-4 flex flex-col justify-center items-center">
      <FaDownload size={30} className="mb-2 text-blue-500" /> 
      <p className="text-lg font-semibold text-gray-800">{`Number of Users: ${numberOfUsers}`}</p>
    </div>
    
  );
};

export default Mobusebox;
