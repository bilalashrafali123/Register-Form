const form = document.querySelector('#form')
const userName = document.querySelector('#user')
const email = document.querySelector('#mail')
const password = document.querySelector('#pass')
const age = document.querySelector('#age')
const nic = document.querySelector('#cnic')


const userNameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*._%+-]{8,}@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/;
const cnicRegex = /^42\d{11}$/;




form.addEventListener('submit' , function(event){

    event.preventDefault()

    if(userNameRegex.test(userName.value)){

        console.log(userName.value);
    }else{
        console.log('please enter valid username');
    }

    if(emailRegex.test(email.value)){
        console.log(email.value);
    }else{
        console.log('please enter valid email');
    }


    if(passwordRegex.test(password.value)){

        console.log(password.value);
    }else{
        console.log('please enter valid password');
    }

    if(ageRegex.test(age.value)){

        console.log(age.value);
    }else{
        console.log('please enter valid age');
    }

    if(cnicRegex.test(nic.value)){

        console.log(nic.value);
    }else{
        console.log('please enter valid nic number');
    }


})

