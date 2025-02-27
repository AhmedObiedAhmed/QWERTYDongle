document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const users = {
        'user1': 'password1',
        'user2': 'password2',
        'user3': 'password3'
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
