import React from "react";

function Services() {
    return ( 
      <div id="services" class="dark:bg-slate-900"> 
      <div class="container mx-auto"> 
      
        <div class="flex flex-col gap-3 items-center"> 
          <h1 class="text-indigo-600 font-bold">SERVICES</h1> 
          <h1 class="text-3xl dark:text-white">What do I </h1> 
          <p class="w-1/2 text-center text-gray-400"> 
            
I want to learn new things and undertake projects to enhance my skills and personal development.
          </p> 
        </div> 
      
        <div class="p-5 sm:p-0 flex flex-wrap justify-between"> 
   
        
          <div 
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3" 
          > 
            <img class="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVFTpXKLiYP8D-xSQgLhFUXxqd7fMsnyU4ydPKE_xniGsSemindPwlZu3Pv_MV3fF2jg&usqp=CAU" alt="" /> 
            <h1 class="font-medium text-lg dark:text-white">HTML E-COMMERECE WEBSITE</h1> 
            <p class="text-gray-400"> 
              I created from the MSc mini project from eCommerce website using HTML CSS AND JAVA 
            </p> 
           
          </div> 
    
          <div 
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3" 
          > 
            <img class="w-10" src="https://png.pngtree.com/templates/20181023/travel-logo-template-png_37514.jpg" alt="" /> 
            <h1 class="font-medium text-lg dark:text-white">HTML TRAVEL WEBSITE</h1> 
            <p class="text-gray-400"> 
              I created the  travel websites for MSc mini project using HTML CSS JavaScript 
            </p> 
           
          </div> 
       
          <div 
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3" 
          > 
            <img class="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_W8mAGe49qEPCeE6QmeZEcPIc1O7bCr3ew&usqp=CAU" alt="" /> 
            <h1 class="font-medium text-lg dark:text-white">REACT TEMPLE WEBSITE</h1> 
            <p class="text-gray-400"> 
              I created the temple own website for booking ticket and donate using react JS 
            </p> 
           
          </div> 
        </div> 
      </div> 
    </div>
    );

}

export default Services;