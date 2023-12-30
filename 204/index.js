 let message=document.querySelector("#message");
//  function keyEvent(e){
//       console.log(`key=${e.key},code=${e.code}`);
//  }

 function keyEvent(e){
          let keyPress= `${e.key}`;
          //alert(keyPress)
          document.querySelector("#msgShow").innerHTML=keyPress;
     }

//  message.addEventListener("keyup",keyEvent);
//  message.addEventListener("keydown",keyEvent);
 message.addEventListener("keypress",keyEvent);