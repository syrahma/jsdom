 let lang=document.querySelector("#lang");
 let btnAdd=document.querySelector("#btnAdd");
 let list=document.querySelector("#list");
 let btnRemove=document.querySelector("#btnRemove");
 btnAdd.onclick=(e)=>{
     e.preventDefault();
     if(lang.value==""){
          console.log("Please add name");

     } 
     if(lang.value!=""){
          let option=new Option(lang.value) ;
          list.add(option) ; 

     } 
     
 
     lang.value="";

 }
 btnRemove.onclick=(e)=>{
          e.preventDefault();
          let index=list.options.length;
          let select=[];
 for(let i=0;i<list.options.length;i++){
          select[i]=list.options[i].selected;
 }
 
 
 while(index--){
          if(select[index]){
              list.remove(index);      

          }

 }
}