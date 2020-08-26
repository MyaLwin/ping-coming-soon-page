const form = document.querySelector('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form['email'].value;
    const small = document.querySelector('small');
    const formInput = document.getElementById('form-input');

    if (email === "" || email === null) {
        formInput.classList.add('error');
        small.innerText = "Please enter an email address";
    } else if (!isValid(email)) {
       formInput.classList.add('error');
       small.innerText = "Please provide a valid email address";
    } else {
        formInput.classList.remove('error');
        small.innerText = " ";
    }

    function isValid(email) {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
})

