let menu=document.querySelector("#menu");
let styleSudo=getComputedStyle(menu,"::first-letter")

let style=getComputedStyle(menu)
console.log('Sudo Font-Size:',styleSudo.fontSize)
console.log('Font-Size:',style.fontSize)
console.log('Font-Size:',style.height)