function deleteMe(){
   document.getElementById("myResult").value="";
    
}

function calculator(value){
          //alert(value)

   document.getElementById("myResult").value+=value;       
         
}

function answer(){

   var a=  document.getElementById("myResult").value;
   var b= eval(a);
   document.getElementById("myResult").value=b;

}