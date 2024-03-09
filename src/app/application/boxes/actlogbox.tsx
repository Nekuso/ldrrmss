import React from 'react';
import { FaHistory, FaAngleRight } from 'react-icons/fa';

const Actlogbox: React.FC = () => {
  return (
    <div className="h-[18vh] w-[20vw] rounded-xl border border-zinc-400 shadow-lg bg-zinc-200 mr-5 p-4 flex flex-col items-center justify-end">
      <div className="flex items-center">
        <FaHistory size={30} className="mb-2 text-blue-500" />
        <p className="text-lg font-semibold text-gray-800 cursor-pointer ml-2">Activity Logs</p>
        <FaAngleRight size={20} className="text-gray-600 ml-1 cursor-pointer" />
      </div>
    </div>
  );
};

export default Actlogbox;
