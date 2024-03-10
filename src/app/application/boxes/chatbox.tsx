import React from 'react';

const Chatbox: React.FC = () => {

  const people: string[] = ['Alex', 'Amanda', 'Jenny', 'John', 'Sarah'];

  return (

<div className="mr-2 h-[63vh] w-[20vw] border border-zinc-400 rounded-lg shadow-lg bg-zinc-200">
<table className="">
  <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-6 py-6">
        Chats
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="">
      <td className="flex flex-col px-2 py-1 font-medium text-gray-900 cursor-pointer">
        <div className="mb-2">Joshua Amores</div>
        <div className="mb-2">Phil Diaz</div>
        <div className="mb-2">Dragon Ronel</div>
        <div className="mb-2">Apolonux</div>
      </td>
    </tr>
  </tbody>
</table>
</div>





 
  );
};

export default Chatbox;
