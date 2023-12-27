
// Append
let app=document.querySelector("#app");
let names=['Jarin','Jayed','Jahin'];

let domScriptForApend=names.map((names)=>{
   let li= document.createElement("li");
   
   li.textContent=names;
   return li;

}

)

app.append(...domScriptForApend);

// Prepend

let apps= document.querySelector("#apps");
let lang= ['Java','HTML','PyThon'];

let domScriptForPrepend=lang.map((langauages)=>{
  let li= document.createElement("li");
  li.textContent=langauages;
  return li;        

}

)

apps.prepend(...domScriptForPrepend);