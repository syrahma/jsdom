 let track=document.querySelector("#track");

 function mousEevent(e){
  console.log(e.type);

 }

 track.addEventListener("mousedown",mousEevent);

 track.addEventListener("mouseup",mousEevent);

 track.addEventListener("click",mousEevent);

 track.addEventListener("dblclick",mousEevent);
//  track.addEventListener("mouseover",mousEevent);
//  track.addEventListener("mouseout",mousEevent);
 track.addEventListener("mouseenter",mousEevent);
 track.addEventListener("mouseleave",mousEevent);
 track.addEventListener("mousemove",mousEevent);

