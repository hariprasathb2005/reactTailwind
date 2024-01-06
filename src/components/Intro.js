import React from "react";

function intro() {
  return (
    <div>
      <img
        className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
        src="https://ouch-cdn2.icons8.com/fgJKMaVTkdnsgrRX516Zcuib9wOWMHQWsdgrJBOzm4s/rs:fit:477:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQy/L2I4MjEyNGIyLTM2/OGItNDcwMy1hY2U3/LWMyOTc0YTk2OGI3/Mi5wbmc.png"
        alt=""
      />

      <div
        className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"
      ></div>

      <div
        className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
      >
        <span className="text-gray-600">HARIPRASATH</span>
        <p id="text" className="text-red-500"></p>
      </div>

      <div
        className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
      >
        <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Hariprasath</h1>
        <p className="text-gray-400">
        Hello, my name is Hari Prasath. I am a second-year BCA student, and I have acquired skills in HTML, CSS, JavaScript, Tailwind CSS, and React. I hope that my portfolio website instills confidence in you.
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="https://drive.google.com/file/d/1nzcs4vs0B9bCL22a7mx7zgcZVU1XIWKQ/view?usp=drivesdk"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default intro;