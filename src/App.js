import React  from "react";

function App() {
  return (
    <div
    class="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
  >
  <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-8" src="./img/logo.png" alt="" />
            <span className="text-2xl font-bold text-indigo-900 dark:text-white"
              >Hariprasath.</span>
            
          </div>
          <ul
            className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
          >
            <li className="hover:text-gray-500">
              <a href="#h">homepage</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#about">about me</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#services">services</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#works">works</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#contact">contact</a>
            </li>
          </ul>
          <img
            id="moon"
            src="./img/moon.png"
            className="hidden md:block w-5 cursor-pointer"
            alt=""
          />
          <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
          <ul
            id="menu"
            className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
          >
            <li>
              <a id="hLink" href="#h  ">homepage</a>
            </li>
            <li>
              <a id="hLink" href="#about">about me</a>
            </li>
            <li>
              <a id="hLink" href="#services">services</a>
            </li>
            <li>
              <a id="hLink" href="#works">works</a>
            </li>
            <li>
              <a id="hLink" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </nav>
  </div>

  
  );
}



export default App;
