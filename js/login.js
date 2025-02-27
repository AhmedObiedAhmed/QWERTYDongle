document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const users = {
        'AhmedObied': '32904617',
        'RahmaSaad': '12345678',
        'quest': '00000000'
    };
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Sanitize input (remove spaces) for comparison
    const sanitizedUsername = username.replace(/\s+/g, '');
    const sanitizedPassword = password.replace(/\s+/g, '');

    if (users[sanitizedUsername] && users[sanitizedUsername] === sanitizedPassword) {
        window.location.href = 'success.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
