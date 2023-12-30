  // document.addEventListener('DOMContentLoaded',()=>{
  //   alert("Document Fully loaded");
  // })

  // addEventListener('load',(e)=>{
  //   alert("Content is loaded");

  // });

  addEventListener("beforeunload",(e)=>{
    //alert('hi')
     e.preventDefault();
     e.returnValue='';
  });

  // addEventListener("unload",()=>{
  //   console.log("The page is unloaded");
  // });