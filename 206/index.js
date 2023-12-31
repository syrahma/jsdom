let myInput=document.querySelector("#myInput");
myInput.addEventListener("focus",(e)=>{
     e.target.style.backgroundColor="yellow"; 
     e.target.style.color="black";   
})

myInput.addEventListener("blur",(e)=>{
          e.target.style.backgroundColor="red"; 
          
          e.target.style.color="yellow"; 
      })