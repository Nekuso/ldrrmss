import React from 'react';
import { FaUser } from 'react-icons/fa'; 

const Mobreqbox: React.FC = () => {
  const approvalCount = 25; 

  return (
    <div className="h-[18vh] w-[20vw] rounded-xl border border-zinc-400 bg-zinc-200 mr-5 p-4 flex flex-col justify-center items-center shadow-lg">
      <div className="flex mt-2">
        <FaUser size={30} className="mb-2 text-green-500 mr-2"/> 
      </div>
      <p className="text-lg font-semibold text-gray-800">{`Approval Requests: ${approvalCount}`}</p>
    </div>
  );
};

export default Mobreqbox;
