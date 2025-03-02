// Hardcoded list of allowed users
const validUsers = {
    "AhmedObied": "32904617",
    "RahmaSaad": "12345678"
};

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (validUsers[username] && validUsers[username] === password) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "pages/file-manager.html";
    } else {
        errorMsg.textContent = "Invalid username or password. Please try again.";
    }
}

// Tour button — goes directly to a limited version of the site
function takeTour() {
    window.location.href = "pages/about-us.html";
}

// Listen for 'Enter' key on input fields
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});
