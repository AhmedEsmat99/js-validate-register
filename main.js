let form=document.getElementById("form");
let username=document.getElementById("UserName");
let Email=document.getElementById("Email");
let pass=document.getElementById("pass");
let pass2=document.getElementById("pass2");

//show error
function showerror(input,message){
  let formcontrol= input.parentElement;
  formcontrol.className='form-control error';
  let small= formcontrol.querySelector('small');
  small.innerText=message;
}
//show success

function showsuccess(input){
  let formcontrol= input.parentElement;
  formcontrol.className='form-control success';
}

//check required fields
function clickrequired(inputarr){
inputarr.forEach(function(input){
  if(input.value.trim()===''){
    showerror(input,`${gitfieldename(input)} is reguired`);
  }else{
    showsuccess(input);
  }
});
}

//get gitfieldename
function gitfieldename(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//check passwords match
function CheckPasswordMatch(input1 , input2){
  if(input1.value !== input2.value){
    showerror(input2 , 'passwords do not match');
  }
}

//Check input length
function CheckInputLength(input , min , max){
  if(input.value.length < min){
    showerror(input,`${gitfieldename(input)} must by at least ${min} characters`);
  }else if (input.value.length > max){
    showerror(input,`${gitfieldename(input)} must by at least ${max} characters`);
  }else{
    showsuccess(input);
  }
} 

form.addEventListener('submit',function(e){
  e.preventDefault();
  clickrequired([username ,Email,pass,pass2]);
  CheckInputLength(pass , 6 ,20);
  CheckPasswordMatch(pass,pass2);
});