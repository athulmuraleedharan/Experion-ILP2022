function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // const email = document.forms['login']['email'].value;
    // const email = document.forms.login.email.value;
    // const password = document.forms.login.password.value;

    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const emailValue = email.value;

    const passwordValue = password.value;

if(emailValue.length < 6 ){
    email.style.border = '1px solid red';
    email.nextElementSibling.classList.remove('d-none');
}
const passwordErrorDisplay =  email.nextElementSibling;

if(passwordValue.length < 16 ){
    password.style.border = '1px solid red';
    // email.nextElementSibling.classList.remove('d-none');
   passwordErrorDisplay.classList.remove('d-none');
   passwordErrorDisplay.innerHTML += '<li> password must be at least be 6 </li>';
   

}

if(passwordValue.include (' ') ){
    password.style.border = '1px solid red';
    // email.nextElementSibling.classList.remove('d-none');
   passwordErrorDisplay.classList.remove('d-none');
   passwordErrorDisplay.innerHTML += '<li> password not conatian white spaces </li>';
   

}

    console.log(email,password);
}