
var div = document.getElementById("name");
var Signin =document.getElementById("Signin");
var input = document.getElementById("recipient-name");
var form = document.getElementById("form");
var button =document.getElementById("button");
var Password = document.getElementById("Password")
var btn =document.getElementById("btn")
Signin.addEventListener( 'click' ,()=>{
  
if (input.value !=="") {
  div.style.display='block';
  div.innerHTML += input.value;   
  button.textContent='Sign Up';
  button.style.backgroundColor ='black';
button.style.color ='white';
button.style.display="none";
btn.style.display='block';  
// console.log(Password.value)
}
})
