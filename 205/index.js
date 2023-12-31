//  window.onscroll=()=>{
//     console.log("Scrolled"); 
//  }

// window.addEventListener("scroll",()=>{
//      console.log("Scroll");
// })
let scroller=0;

window.addEventListener("scroll",()=>{
     let newScoller=window.scrollYOffset||document.documentElement.scrollTop;
 if(newScoller>scroller){
console.log("Scroll is down");
 } 
 else{
     console.log("Scroll is Up"); 
 }  
 scroller=newScoller; 
})