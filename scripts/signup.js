// console.log("helloooo");
document.querySelector("#signupform").addEventListener("submit",formSubmit);

var formArr=JSON.parse(localStorage.getItem("formData")) || [];

function formSubmit(event){
   event.preventDefault();
   var name=document.querySelector("#name").value;
   var number=document.querySelector("#number").value;
   var email=document.querySelector("#email").value;
   var password=document.querySelector("#password").value;
    


   function  details (name,number,email,password){
       this.name=name;
       this.number=number;
       this.email=email;
       this.password=password;
   }

   const formDetails = new details(name,number,email,password);
   console.log(formDetails);
//    console.log("hello");
   formArr.push(formDetails);

   localStorage.setItem("formData",JSON.stringify(formArr));

   document.querySelector("input[type='submit']").addEventListener("click", function(){
      window.location.href="login.html";
  });
  
  if(name==""||number==""||email==""||password=="")
  {
   alert("Please fill all the fields");
  }
  
} 
