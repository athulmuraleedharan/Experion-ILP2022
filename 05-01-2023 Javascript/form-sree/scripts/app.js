const formData = {
    email: {
        field: document.forms.login.email,
        errors: []
    },
    password: {
        field: document.forms.login.password,
        errors: []
    },
    // isInvalid: function(){
    //     return (this.email.errors.length > 0 || this.password.errors.length > 0);
    // },
    clean: function(){
        this.email.errors = [];
        this.password.errors = [];
    }
};

function handleSubmit(e){
    e.preventDefault();
    
    // Validating email.
    validate();

}

function displayErrors() {

    let nextElement = formData.email.field.nextElementSibling;
    nextElement.innerHTML = '';
    if (formData.email.errors.length > 0) {
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.email.errors.join('<br/>');
    }

    nextElement = formData.password.field.nextElementSibling;
    nextElement.innerHTML = '';
    if (formData.password.errors.length > 0) {
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.password.errors.join('<br/>');
    }

}

function validate() {

    formData.clean();
    console.log(formData);
    if (formData.email.field.value === '') {
        formData.email.errors.push('Email is required.');
    }
    if (!formData.email.field.value.includes('@')) {
        formData.email.errors.push('Email must be valid.');
    }

    // Validating password.
    if (formData.password.field.value === '') {
        formData.password.errors.push('Password is required.');
    }
    if (formData.password.field.value.length < 6) {
        formData.password.errors.push('Password must be at least 6 characters long.');
    }

    displayErrors();

}

// Auto validation.
document.querySelectorAll('#login input').forEach(element=>{
    element.addEventListener('keyup', ()=>{
        validate();
    });
});
