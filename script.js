document.addEventListener("DOMContentLoaded", function () {
    // Get tab buttons
    const signupTab = document.getElementById('signup-tab');
    const loginTab = document.getElementById('login-tab');

    // Get forms
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');

    // Function to switch to signup
    function showSignup() {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        signupTab.parentElement.classList.add('active');
        loginTab.parentElement.classList.remove('active');
    }

    // Function to switch to login
    function showLogin() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginTab.parentElement.classList.add('active');
        signupTab.parentElement.classList.remove('active');
    }

    // Event listeners
    signupTab.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        showSignup();
    });

    loginTab.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        showLogin();
    });

    // Show signup form by default on load
    showSignup();
});
