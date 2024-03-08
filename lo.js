const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate inputs (you can add more validation rules)
    if (usernameInput.value.trim() === '') {
        alert('Please enter a valid username.');
        return;
    }

    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Submit the form (you can send data to a server here)
    alert('Sign-up successful!');
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
