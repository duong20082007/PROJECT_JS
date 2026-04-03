let adminAccounts = JSON.parse(localStorage.getItem('adminAccounts')) || [];
let loginForm = document.getElementById('loginForm');
let nameCheck = document.getElementById('nameError');
let emailCheck = document.getElementById('emailError');
let passwordCheck = document.getElementById('passwordError');
let confirmPasswordCheck = document.getElementById('confirmError');
let error = document.querySelectorAll('.error-msg');
let errorInput = document.querySelectorAll('input');
let emailInput = document.getElementById('loginEmail');
let passwordInput = document.getElementById('loginPassword');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    error.forEach(msg => msg.innerText = "");
    errorInput.forEach(input => input.style.borderColor = "");


    if (emailInput.value.trim() === "") {
        emailCheck.innerText = "Email không được để trống";
        emailInput.style.borderColor = "red";
        return;
    }

    if (passwordInput.value === "") {
        passwordCheck.innerText = "Mật khẩu không được để trống";
        passwordInput.style.borderColor = "red";
        return;
    }

    const adminFound = adminAccounts.find(acc => 
        acc.email === emailInput.value.trim() && 
        acc.password === passwordInput.value && 
        acc.role === 'admin'
    );

    if (adminFound) {
        localStorage.setItem('currentAdmin', JSON.stringify(adminFound));
        window.location.href = "manager.html"; 
    } else {
        passwordCheck.innerText = "Email hoặc Mật khẩu không đúng!";
        passwordInput.style.borderColor = "red";
    }
});
const togglePasswordIcons = document.querySelectorAll('.toggle-password');
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target');
        const passwordInput = document.getElementById(targetId);

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye-slash'); 
            icon.classList.add('fa-eye'); 
        } else {
            passwordInput.type = 'password'; 
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});