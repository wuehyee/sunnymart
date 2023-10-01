const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const hardcodedEmail = 'jenniekim01@example.com';
const hardcodedPassword = '123456';


function validateForm() {
    const email = emailInput.value;
    const password = passwordInput.value;

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

    // Check the entered email and password 
    if (email !== hardcodedEmail || password !== hardcodedPassword) {
        emailError.textContent = 'Invalid login';
        return false;
    } else {
        emailError.textContent = '';
    }

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        // If form is valid, redirect to index.html
        window.location.href = 'index.html';
    }
});
