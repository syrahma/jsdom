let menu=document.querySelector("#menu");
// class Add
menu.classList.add("class1","class2");

// Class Remove
menu.classList.remove("class1");

// Class Replace

menu.classList.replace("class2","info");

// Class contains

console.log(menu.classList.contains("info"));

// Class Toggle
menu.classList.toggle("info");
