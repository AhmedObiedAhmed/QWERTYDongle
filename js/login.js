document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const users = {
        'AhmedObied': '32904617',
        'RahmaSaad': '12345678',
        'quest': '00000000'
    };
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (users[username] && users[username] === password) {
        window.location.href = 'success.html';
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
