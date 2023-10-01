const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const newPasswordInput = document.getElementById('newpasswordInput');
const newpasswordError = document.getElementById('newpasswordError');
const confirmPasswordInput = document.getElementById('confirmpasswordInput');
const confirmPasswordError = document.getElementById('confirmpasswordError');
const hardcodedEmail = 'jenniekim01@example.com';

function validateForm() {
    const email = emailInput.value;
    const password = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate email format
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    } else {
        emailError.textContent = '';
    }

    // Validate password length
    if (password.length < 6) {
        newpasswordError.textContent = 'Password must be at least 6 characters long';
        return false;
    } else {
        newpasswordError.textContent = '';
    }

    // Check if new password and confirm password match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Check the entered email and password 
    if (email !== hardcodedEmail) {
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

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
        // If form is valid, redirect to login.html to login their account
        window.location.href = 'login.html';
    }
});