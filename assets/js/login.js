function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        window.location.href = "pages/about-us.html";
    } else {
        document.getElementById('error-msg').innerText = "Invalid credentials! Try again.";
    }
}

function takeTour() {
    localStorage.setItem('tourMode', 'true');
    window.location.href = "pages/games.html";
}
