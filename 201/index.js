let btn =document.querySelector("#btn");
let domTwo =document.querySelector("#domTwo");

btn.onclick=function(){
          alert("This message from DOM level o handler");
}

domTwo.addEventListener('click',function(){
  alert("This message from DOM Two level handler");        
})

