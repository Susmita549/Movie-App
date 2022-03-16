

var regUsers = JSON.parse(localStorage.getItem("formData"));
  
console.log(regUsers);
document.querySelector("#loginform").addEventListener("submit",formSubmit);
var form = document.querySelector("#loginform");

function formSubmit(event){
    event.preventDefault();
    
    var name=loginform.name.value;
    var password=loginform.password.value;
    //console.log(user,pass)
 //console.log(loginObj);
 var flag=0;
  for (var i=0;i<regUsers.length;i++)
  {   
      if(regUsers[i].name==name && regUsers[i].password==password)
      {
         flag=1;
      }
  }
  if (flag==1)
  {
      alert("login success");
      window.location.href="index.html"

  }
  else{
      alert("invalid Credentials")
  }


}
