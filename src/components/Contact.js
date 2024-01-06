import React from "react";

function Contact () {

    return(
    
<div id="contact" class="dark:bg-slate-900"> 
     <div class="container mx-auto"> 
      
       <div class="flex flex-col gap-3 items-center"> 
         <h1 class="text-indigo-600 font-bold">CONTACT</h1> 
         <h1 class="text-3xl dark:text-white">Let's create something together 🤟</h1> 
         <p class="w-1/3 text-center text-gray-400"> 
             Let's Chat. 
             Tell me about your project... 
         </p> 
       </div> 
    
       <form class="mt-5 p-8 flex flex-col gap-5 items-center"> 
         <h1 class="text-3xl dark:text-white" > SEND YOUR MASSAGE 🚀</h1> 
         <input 
           class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white" 
           type="text" 
           placeholder="hari..." 
         /> 
         <input 
           class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white" 
           type="email" 
           placeholder="hello@abc.com...." 
         /> 
         <textarea 
           class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white" 
           cols="30" 
           rows="10" 
           placeholder="your Message here..." 
         ></textarea> 
         <button 
           class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer" 
         > 
           Submit 
         </button> 
       </form> 
     </div> 
   </div>
    
    );
}

export default Contact ;