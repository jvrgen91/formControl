const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

   
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email);}





const formControl=document.getElementById('email');
const checkbox= document.getElementById('exampleCheck1');
const modalCheckBox=document.getElementById('exampleCheck2')
const acceptbtn= document.getElementById('accept')
const submit = document.getElementById('sub')
const inputFields=document.getElementsByClassName('form-control')
const erro=document.getElementById('error')
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
    checkbox.disabled=false;
}else{
    checkbox.checked=false;
   
}
}
// // const moda =document.getElementById("licenseAgreement");
// //  moda.addEventListener("scroll", checkScrollHeight, false);

// // function checkScrollHeight(){
// //     if (window.onscrollY >= 400){
// //         acceptbtn.disabled = false
   
// //     }else{
// //         acceptbtn.disabled = true
//     }
//     }

document.getElementById("licenseAgreement").addEventListener("scroll", checkScrollHeight, false);

function checkScrollHeight(){
    var agreementTextElement = document.getElementById("licenseAgreement")
    if ((agreementTextElement.scrollTop ) >= 600){
        document.getElementById("accept").disabled = false;
        modalCheckBox.disabled=false;
        
    }else{
        acceptbtn.disabled=true;
    }
}

function readTerms(){
    if (document.getElementById('exampleCheck2').disabled=true){
        document.getElementById('erro').classList.toggle("terms");
  
}

else if (document.getElementById('exampleCheck1').disabled=false){
    document.getElementById('erro').style.visibility='hidden';
    document.getElementById('erro').classList.add('terms')
}
}



// function notEmpty(){
//     if(inputFields.length > 0){
//         submit.disabled = false;
      
//     }else{
//         submit.disabled = true;
//     }
// }

