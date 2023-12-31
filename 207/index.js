 let username=document.querySelector("#username");
 let email=document.querySelector("#email");
 let password=document.querySelector("#password");
 let password2=document.querySelector("#password2");
 let form=document.querySelector("#form");

 function showErrorMessage(input,message){
     const formControl=input.parentElement;
     formControl.className="form-control error";
     const small= formControl.querySelector("small");
     small.innerText=message;

 }

 function showSuccessMessage(input){
     const formControl=input.parentElement;
     formControl.className="form-control success";
  

 }

 function checkMail(input){
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if(emailRegex.test(input.value)){
          showSuccessMessage(input)
     }
     else{
          showErrorMessage(input,"Email is not Valid") ;
     }

 }

 function checkInputLength(input,min,max){
     if(input.value.length<min){
          showErrorMessage(input,`${getFieldName(input)} You must be at least ${min}`)

     }
     else if(input.value.length>max){
          showErrorMessage(input,`${getFieldName(input)} You must be less than ${max}`)
     }
     else{
          showSuccessMessage(input);
     }

 }

 function getFieldName(input){
     return input.id.charAt(0).toUpperCase() +input.id.slice(1);

 }

 function checkPasswordMatch(input1,input2){
     //alert(input1.value+ "Hi"+input2.value)

     if(input1.value!=input2.value){
          //alert("Password not same")
          showErrorMessage(input2,"Password is not same");

     }

 }

 form.addEventListener("submit",(e)=>{
     e.preventDefault();
     checkInputLength(username,3,20);
     checkInputLength(password,6,30);
     checkMail(email);
     checkPasswordMatch(password,password2);

 })