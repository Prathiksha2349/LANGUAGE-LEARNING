
let currentUser = null;

function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    // Simulate authentication (replace with backend authentication logic)
    if (username === currentUser && password === 'password') {
        alert('Login successful!');
        currentUser = username;
        updateUI();
    } else {
        alert('Login failed. Please check your credentials.');
    }
}
function logout() {
    currentUser = null;
    updateUI();
}

function createAccount() {
    const newUsername = document.getElementById('newUsernameInput').value;
    const newPassword = document.getElementById('newPasswordInput').value;

    // Simulate account creation (replace with backend logic)
    if (newUsername && newPassword) {
        alert('Account created successfully!');
        currentUser = newUsername;
        updateUI();
    } else {
        alert('Account creation failed. Please fill in all fields.');
    }
}
function recoverPassword() {
    const forgotUsername = document.getElementById('forgotUsernameInput').value;

    // Simulate password recovery (replace with backend logic)
    if (forgotUsername) {
        alert('Password recovery email sent to ' + forgotUsername);
    } else {
        alert('Password recovery failed. Please enter your username.');
    }
}

function updateUI() {
    const userPanel = document.getElementById('userPanel');
    const loginPanel = document.getElementById('loginPanel');
    const createAccountPanel = document.getElementById('createAccountPanel');
    const usernameSpan = document.getElementById('username');

    if (currentUser) {
        userPanel.style.display = 'block';
        loginPanel.style.display = 'none';
        createAccountPanel.style.display = 'none';
        usernameSpan.innerText = currentUser;
    } else {
        userPanel.style.display = 'none';
        loginPanel.style.display = 'block';
        createAccountPanel.style.display = 'block';
        document.getElementById('usernameInput').value = '';
        document.getElementById('passwordInput').value = '';
        document.getElementById('newUsernameInput').value = '';
        document.getElementById('newPasswordInput').value = '';
    }
}
