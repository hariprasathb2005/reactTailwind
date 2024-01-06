import React from "react"

function About() {
    return( 
<div id="about" class="px-10 dark:bg-slate-900">
      <div
        class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20"
      >
       
        <div class="relative">
          
          <div class="h-full rounded-full overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdmIZnmmOlqaKYSHuEULVZvIEMt6Inujk9w&usqp=CAU" alt="" />
          </div>
        </div>
      
        <div class="my-auto flex flex-col gap-3">
          <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 class="text-3xl font-medium dark:text-white">Better Design</h1>
          <h1 class="text-3xl font-medium dark:text-white">
            Better Experience
          </h1>
          <p class="text-gray-400">
           
I have learned several programming languages, including HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <h2 class="text-gray-400 font-medium">HTML</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">CSS</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">Javascript</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-3/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">React</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">Tailwind</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-1/2 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>


    );
}

export default About;