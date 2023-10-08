let menu = document.querySelector("#menu");

// replace child
// let li= document.createElement("li");
// li.textContent="Home";
// menu.replaceChild(li,menu.firstElementChild);

// remove child

//menu.removeChild(menu.lastElementChild);

// clone child

let cloneNode= menu.cloneNode(true);
cloneNode.id="menu2"
document.body.appendChild(cloneNode);