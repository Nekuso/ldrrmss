import React from 'react';

const Stocks: React.FC = () => {
  const product = {
    name: 'Jasmine Rice (Per kilo)',
    category: 'Food',
    amount: '10',
    date: '02/25/2024',
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-black font-bold ml-4 mb-2">Stocks</h1>
      <div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Request Type
                </th>
                <th scope="col" className="px-4 py-3">
                  Request Time & Date
                </th>
                <th scope="col" className="px-4 py-3">
                  Status
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only text-gray-500">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">{product.amount}</td>
                <td className="px-4 py-3">{product.date}</td>
                <td className="px-4 py-3 relative group">
                  <button
                    type="button"
                    className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      />
                    </svg>
                    <span className="text-gray-500">Add product</span>
                  </button>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
