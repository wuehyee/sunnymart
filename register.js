const usernameInput = document.querySelector('input[placeholder="Username"]');
const fullNameInput = document.querySelector('input[placeholder="Full Name"]');
const telInput = document.querySelector('input[type="tel"][placeholder="Phone Number:+60xxxxxxxxx"]');
const emailInput = document.querySelector('input[type="text"][placeholder="Email address"]');
const addressInput = document.querySelector('input[placeholder="Address"]');
const passwordInput = document.querySelector('input[type="password"][placeholder="Password"]');
const confirmPasswordInput = document.querySelector('input[type="password"][placeholder="Confirm password"]');

const usernameError = document.getElementById('usernameError');
const fullNameError = document.getElementById('fullNameError');
const telError = document.getElementById('telError');
const emailError = document.getElementById('emailError');
const addressError = document.getElementById('addressError');
const passwordError = document.getElementById('pwdError');
const confirmPasswordError = document.getElementById('confirmpwdError');


function validateForm() {
    const username = usernameInput.value;
    const fullName = fullNameInput.value;
    const tel = telInput.value;
    const email = emailInput.value;
    const address = addressInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate username, full name, and address
    if (username.trim() === '') {
        usernameError.textContent = 'Please enter a username';
        return false;
    } else {
        usernameError.textContent = '';
    }

    if (fullName.trim() === '') {
        fullNameError.textContent = 'Please enter your full name';
        return false;
    } else {
       fullNameError.textContent = '';
    }

    if (address.trim() === '') {
        addressError.textContent = 'Please enter your address';
        return false;
    } else {
        addressError.textContent = '';
    }

    // Validate telephone number format
    if (!validateTel(tel)) {
        telError.textContent = 'Please enter a valid telephone number (+60xxxxxxxxx)';
        return false;
    } else {
        telError.textContent = '';
    }

    // Validate email format
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    } else {
        emailError.textContent = '';
    }

    // Validate password length
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        return false;
    } else {
        passwordError.textContent = '';
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.textContent = '';
    }

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateTel(tel) {
    const telRegex = /^\+60\d{9}$/;
    return telRegex.test(tel);
}

const registerButton = document.querySelector('.register-button');
registerButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        window.location.href = 'login.html';
    }
});
