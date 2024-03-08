import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full">

<h1 className="text-white font-bold ml-4 mb-2 ">Dashboard</h1>

<div className="content-center flex m-2">
<div className="h-[18vh] w-[20vw] rounded-xl border border-white bg-zinc-600  mr-7 ">Mobile Users</div>
<div className="h-[18vh] w-[20vw] rounded-xl border border-white bg-zinc-600 mr-5">Mobile Requests</div>
<div className="h-[18vh] w-[20vw] rounded-xl border border-white bg-zinc-600 ">Acitivity Logs</div>
    </div>
<div className="content-center flex m-2">
<div className="h-[18vh] w-[42vw] rounded-xl border border-white bg-zinc-600  mr-5 ">Reminders</div>
    </div>
<div className="content-center flex m-2">
<div className="h-[45vh] w-[42vw] rounded-xl border border-white bg-zinc-600 mr-5 ">Statistics</div>
<div className="h-[45vh] w-[20vw] rounded-xl border border-white bg-zinc-600  mr-5 ">Chats</div>
    </div>

    </div>
  );
}

export default Dashboard;
