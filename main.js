let btn=document.querySelector("button");
let textarea=document.querySelector("textarea");
let another_container=document.querySelector(".another_container");
let h5=document.querySelectorAll("h5");


btn.addEventListener("click",function(){

if(textarea.value!=""){
    let val1=textarea.value;

// |||||||||| For upper case||||||||||||
   let uppercase=val1.match(/[A-Z]/g);
 if(uppercase==null){
     
   h5[2].innerText="000";
 }
 else{
        h5[2].innerText=uppercase.length;
 }
//  / |||||||||| For upper case|||||||||||
let lowercase=val1.match(/[a-z]/g);
if(lowercase==null){
     
    h5[3].innerText="000";
  }
  else{
         h5[3].innerText=lowercase.length;
  }

//   / |||||||||| For numbers case|||||||||||
let number=val1.match(/[0-9]/g);
if(number==null){
     
    h5[4].innerText="000";
  }
  else{
         h5[4].innerText=number.length;
  }
//   / |||||||||| For spaces case|||||||||||
let spaces=val1.match(/[\s]/g);
if(spaces==null){
     
    h5[7].innerText="000";
  }
  else{
         h5[7].innerText=spaces.length;
  }
//   / |||||||||| For vowels case|||||||||||
let vowels=val1.match(/[aeiou]/gi);//(i is used for searching both uper and lowercase)
if(vowels==null){
     
    h5[5].innerText="000";
  }
  else{
         h5[5].innerText=vowels.length;
  }
//   / |||||||||| For consonent case|||||||||||
let consonents=val1.match(/[bcdfghjklmnpqrstvwxyz]/gi);
if(consonents==null){
     
    h5[6].innerText="000";
  }
  else{
         h5[6].innerText=consonents.length;
  }
  //   / |||||||||| For consonent case|||||||||||
let sentences=val1.match(/[.]/g)

if(sentences==null){
    h5[1].innerText="000";
}
else{
    h5[1].innerText=sentences.length;
}
//   / |||||||||| For words|||||||||||
let words=val1.match(/[a-z]+/gi);
if(words==null)
{
    h5[0].innerText="000";  
}
else{
    h5[0].innerText=words.length; 
}
}

else{

    alert("please enter something");
}})
