let app = document.querySelector("#app");
let names = ["Jayed","Jarin","Jahin"];

 let domScript= names.map((names)=>{
 let li =document.createElement("li");
 li.textContent=names; 
 return li;        
 }
 )
 app.append(...domScript);

 let apps= document.querySelector("#apps");
 let lang= ["JavaScript","Swit","Python"];
 let docScript=lang.map((langues)=>{
   let li =document.createElement("li");
   li.textContent= langues;
   return li;       

 }
 )

 apps.prepend(...docScript);