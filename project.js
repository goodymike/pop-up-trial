const name= document.querySelector("#name");
const age= document.querySelector("#age");
const mask= document.querySelector("#mask");
let allow=0;
let denied=0;
let total=0;

function checkUser() {
   if (age.value==='' || name.value==='') {
      denied++;
      total++;
      document.querySelector("#deny").innerHTML= "DENIED VISITORS:" + denied;
      document.querySelector("#sum").innerHTML= "TOTAL VISITORS:" + total;
   alert ("please fill in the required") ;
    }
  else if (age.value< 12 && mask.value=="yes") {
    denied++;
    total++;
    document.querySelector("#deny").innerHTML= "DENIED VISITORS:" + denied;
    document.querySelector("#sum").innerHTML= "TOTAL VISITORS:" + total;
 alert ("You are not old enough to shop here") ;
  }
   else if (age.value>= 12 && mask.value=="no") {
    denied++;
    total++;
    document.querySelector("#deny").innerHTML= "DENIED VISITORS:" + denied;
    document.querySelector("#sum").innerHTML= "TOTAL VISITORS:" + total;
    alert ("You need a face mask to shop here")
   }  
   else if (age.value>= 12 && mask.value=="yes") {
    allow++;
    total++;
    document.querySelector("#allow").innerHTML= "ALLOWED VISITORS:" + allow;
    document.querySelector("#sum").innerHTML= "TOTAL VISITORS:" + total;
    alert ("welcome to Goodness Shopping Mall")
   }  
   else {
    denied++;
    total++;
    document.querySelector("#deny").innerHTML= "DENIED VISITORS:" + denied;
    document.querySelector("#sum").innerHTML= "TOTAL VISITORS:" + total; 
     alert('sorry you do not have access to this mall, please ensure your details are correct')
    
  }
  name.value="";
  age.value="";
}
let formPopUp= document.querySelector(".formBg");
let btn= document.querySelector(".shop");
let close= document.querySelector(".close-btn");

   function openForm() {
      if (document.getElementById("form").style.display=="none") {
         document.getElementById("form").style.display="block";
      } else {
         document.getElementById("form").style.display="none";
      }
      
   }
   
close.onclick= function() {
   formPopUp.style.display="none"
}
window.onclick= function(event) {
   if (event.target==formPopUp) {
      formPopUp.style.display="none" 
   } 
}
