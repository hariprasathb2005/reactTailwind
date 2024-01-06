import React  from "react";

function Work (){
    return(
<div id="works" class="py-40 dark:bg-slate-900"> 
     <div class="container mx-auto"> 

       <div class="flex flex-col gap-3 items-center"> 
         <h1 class="text-indigo-600 font-bold">WORKS</h1> 
         <h1 class="text-3xl dark:text-white">Some of the projects i have made </h1> 
         <p class="w-1/2 text-center text-gray-400"> 
         I have created projects using HTML, CSS, and React for an e-commerce website, a travel website, and a temple visiting website.
         </p> 
       </div> 
       
       <div class="p-5 sm:p-0 flex flex-wrap justify-between"> 
        
         <div 
           class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110" 
         > 
           <img src="data:image/jpeg;base64,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" /> 
         </div> 
      
         <div 
           class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110" 
         > 
           <img src="data:image/jpeg;base64,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" /> 
         </div> 
       
         <div 
           class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110" 
         > 
           <img src="data:image/jpeg;base64,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" /> 
         </div> 
      
  
       </div> 
     </div> 
   </div>
    );
}

export default Work;