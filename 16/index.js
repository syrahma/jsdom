let div= document.querySelector("div");
div.id="menu";
// set attribute
let btn = document.querySelector("#btn");
if(btn){
  btn.setAttribute("name","attr");  
  btn.setAttribute("class","syed");
  btn.setAttribute("id","syed");       
}
// get attribute
if(btn){
   console.log(btn.getAttribute("name"));       
}

// remove attribute

if(btn){
          console.log(btn.removeAttribute("name"));       
  }

   // has atrribute

  let text= document.querySelector("#text");
 
  console.log(text.hasAttribute("id"));       
 
