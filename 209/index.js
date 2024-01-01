 const btn= document.querySelector("#btn");
 
 btn.addEventListener("click",(e)=>{
  let checkBoxs= document.querySelectorAll("input[name='color']:checked");
  let values=[];
  checkBoxs.forEach((checkBox)=>{
   values.push(checkBox.value)
  })
 
 alert(values);

 })