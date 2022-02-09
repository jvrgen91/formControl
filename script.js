// const username = document.getElementById('name');
// const password= document.getElementById('password');
// const form = document.getElementById('form');
// const email = document.getElementById('email');

// form.addEventListener('submit',(e) =>{
//     e.preventDefault()

//     checkInputs();
// })

// function checkInputs(){
//     const userNameValue= username.value.trim();
//    const emailValue= email.value.trim();
//    const passwordValue= password.value.trim();

//    if (userNameValue ===' ') {
//        setErrorFor(username, 'Username cannot be blank')
//    } else {
//        //succes
//     setSuccsesFor(username);
//    }
// } 


// function setErrorFor (input,message){
//     const formGroup= input.parentElement;
//     const small= formGroup.querySelector('small');

//     //add erro message inside small
//     small.innerText=message;

//     //addError class
//     formGroup.className='form-group error';
// }

// function setSuccsesFor(input){
//     const formGroup = input.parentElement;
//     formGroup.className='form-group succsess'
// }

// const modal = document.querySelector(".modal");
// const trigger = document.querySelector(".trigger");
// const closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }}

//     }}

const formControl=document.getElementById('email');
const checkbox= document.getElementById('exampleCheck1');
const modalCheckBox=document.getElementById('exampleCheck2')
const acceptbtn= document.getElementById('accept')
//  function checke23(){  
//      if(modalCheckBox.checked=true){
//        checkbox.checked=true;
//      }  
//     } 
//     console.log(checkbox)
//     console.log(modalCheckBox)
function checkDat(){
if(modalCheckBox.checked){
    checkbox.checked=true;
}else{
    checkbox.checked=false;
}
 
}
const moda =document.getElementById("licenseAgreement");
 moda.addEventListener("scroll", checkScrollHeight, false);

function checkScrollHeight(){
    if ((moda.scrollTop + moda.offsetHeight) >= 400){
        acceptbtn.disabled = false
   
    }
    }

// document.getElementsByName("licenseAgreement")[0].addEventListener("scroll", checkScrollHeight, false);

// function checkScrollHeight(){
//     var agreementTextElement = document.getElementsByName("licenseAgreement")[0] 
//     if ((agreementTextElement.scrollTop + agreementTextElement.offsetHeight) >= agreementTextElement.scrollHeight){
//         document.getElementById("accept")[0].disabled = false;
//     }
// }

function notEmpty(){
    if(formControl.value > 0){
        document.getElementsByClassName('btn').disabled = false;
      
    }else{
        document.getElementsByClassName('btn').disabled = true;
    }
}



