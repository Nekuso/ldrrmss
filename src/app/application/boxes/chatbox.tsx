import React from 'react';

const Chatbox: React.FC = () => {
  // Example list of people
  const people: string[] = ['Alex', 'Amanda', 'Jenny', 'John', 'Sarah'];

  return (
    <div className="h-[63vh] w-[20vw] rounded-xl border border-zinc-400 bg-zinc-200 mr-5 p-4 flex flex-col justify-center items-center shadow-lg overflow-y-auto">

<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-6 py-3">
        Chats
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="flex flex-col px-6 py-4 font-medium text-gray-900 dark:text-white cursor-pointer">
        <div className="mb-2">Joshua No Amores</div>
        <div className="mb-2">Phil Baby Diaz</div>
        <div className="mb-2">Dragon Ronel Beriana</div>
        <div className="mb-2">This guy will be back</div>
        <div>Status: No Progress</div>
      </td>
    </tr>
  </tbody>
</table>




    </div>
  );
};

export default Chatbox;
