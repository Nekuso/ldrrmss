import React from 'react';

const Announcement: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-black font-bold ml-4 mb-2">Announcement</h1>
      <div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">

      <button type="button" className=" bg-teal-100 border-2 border-teal-500 text-teal-900 flex items-center justify-center focus:ring-1 focus:ring-primary-300 rounded-lg text-sm px-4 py-2 m-2 h-[7vh] w-[16vw]">
        <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
        </svg>
            <span className="text-emerald-900">Create Announcement</span>
      </button>




        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-lg text-teal-900 px-1 py-3 shadow-md mt-2 ml-2 w-[90%]" role="alert">
          <div className="flex items-center">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-teal-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold">New Memorandum</p>
              <p className="text-sm">Make sure you know how these changes affect you.</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-200 border-t-4 border-orange-700 rounded-lg text-teal-900 px-1 py-3 shadow-md mt-2 ml-2 w-[90%]" role="alert">
          <div className="flex items-center">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold">New Rescue tips </p>
              <p className="text-sm">Make sure you know how these changes affect you.</p>
            </div>
          </div>
        </div>

      </div> </div>

  );
}

export default Announcement;
