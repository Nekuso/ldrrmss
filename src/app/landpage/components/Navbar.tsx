import React from 'react';

const Navbar: React.FC = () => {
  return (
<nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <a href="../../landpage" className="font-semibold text-xl tracking-tight">AMLAN LDRRM</a>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="../../landpage/docs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4">
        Docs
      </a>
      <a href="../../landpage/services" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4">
        Services
      </a>
      <a href="../../landpage/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400">
        About
      </a>
    </div>
    <div>

    </div>
  </div>
</nav>
  );
};

export default Navbar;
