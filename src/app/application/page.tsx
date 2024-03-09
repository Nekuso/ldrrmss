import React from 'react';
import StatBox from './boxes/statbox';
import Mobusebox from './boxes/mobusebox';
import Mobreqbox from './boxes/mobreqbox';
import Actlogbox from './boxes/actlogbox';
import Chatbox from './boxes/chatbox';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full">


<h1 className="text-black font-bold ml-4 mb-2">Dashboard</h1>
<div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">

<div className="content-center flex m-2">
<Mobusebox/>
<Mobreqbox/>
<Actlogbox/>
</div>

<div className="content-center flex m-2">
<StatBox />
<Chatbox/>
</div>
    </div>
    </div>
  );
}

export default Dashboard;
