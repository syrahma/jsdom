let menue=document.querySelector("#menue");
// Replace child
// let li=document.createElement("li");
// li.textContent="Home";
// menue.replaceChild(li,menue.firstElementChild);

// Remove child
// menue.removeChild(menue.firstElementChild);
//menue.removeChild(menue.lastElementChild);

// Clone node

let cloneNode= menue.cloneNode(true);
cloneNode.id="cloneId";

document.body.appendChild(cloneNode);

 





