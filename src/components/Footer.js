import React  from "react";
 import Img1 from '../img/fb-w.png';
import Img2 from '../img/github-w.png';
import Img3 from '../img/instagram-w.png';
import Img4 from '../img/linkedin-w.png';


function  Footer (){

    return(
        <div class="w-full bg-gray-800"> 
        <div class="container mx-auto py-5 flex items-center justify-between"> 
          <div class="flex items-center gap-2"> 
            <img class="w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEKhgtMjzDvFu8eKkmvvbtgpWvOkUWl_GDQ&usqp=CAU" alt="" /> 
            <span class="text-2xl font-bold text-white"> Hariprasath.</span> 
          </div> 
          <span class="hidden md:block font-medium text-white" 
            >made with ❤️ by hari </span> 
          <div class="flex gap-2"> 
            <img class="w-4 cursor-pointer" src={Img1} href="" alt="" />
            <img class="w-4 cursor-pointer" src={Img2}  href="https://github.com/Hariarehariscar" alt="" /> 
            <img class="w-4 cursor-pointer" src={Img3} href="https://www.instagram.com/hari_are_hariscar?igsh=ZGNjOWZkYTE3MQ==" alt="" /> 
            <img class="w-4 cursor-pointer" src={Img4}  alt="" /> 
          </div> 
        </div> 
      </div>

    
    
    );
}

export default Footer;