const form = document.querySelector('#form')
const userName = document.querySelector('#user')
const email = document.querySelector('#mail')
const password = document.querySelector('#pass')
const age = document.querySelector('#age')
const nic = document.querySelector('#cnic')



const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/;
const cnicRegex = /^42\d{11}$/;


form.addEventListener('submit' , function(event){
    event.preventDefault()
    // console.log(userName.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(age.value);
    // console.log(nic.value);

    console.log(usernameRegex.test(userName.value));
    console.log(emailRegex.test(email.value));
    console.log(passwordRegex.test(password.value));
    console.log(ageRegex.test(age.value));
    console.log(cnicRegex.test(nic.value));

       
  }  )
