document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const users = {
        'ahmedobied': '32904617',
        'rahmasaad': '12345678',
        'quest': '00000000'
    };
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim().toLowerCase();
    const message = document.getElementById('message');

    // Convert input to lowercase for comparison
    const sanitizedUsername = username.replace(/\s+/g, '').toLowerCase();
    const sanitizedPassword = password.replace(/\s+/g, '').toLowerCase();

    if (users[sanitizedUsername] && users[sanitizedUsername] === sanitizedPassword) {
        window.location.href = 'success.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
