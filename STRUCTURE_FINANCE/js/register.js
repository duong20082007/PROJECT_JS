let adminAccounts = JSON.parse(localStorage.getItem('adminAccounts'));
if (!adminAccounts) {
    adminAccounts = [
        {
            id: 1,
            fullName: "Admin Chính",
            email: "LQTuan@rikkei.edu.vn",
            password: "Admin123456",
            role: "admin",
            createdAt: "2026-03-03T12:26:21.617Z",
            isActive: true
        }
    ];
    localStorage.setItem('adminAccounts', JSON.stringify(adminAccounts));
}

const registerForm = document.getElementById('registerForm');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const agreeTerms = document.getElementById('agreeTerms');
const error = document.querySelectorAll('.error-msg');
const errorInput = document.querySelectorAll('input');
const nameCheck = document.getElementById('nameError');
const emailCheck = document.getElementById('emailError');
const passwordCheck = document.getElementById('passwordError');
const confirmPasswordCheck = document.getElementById('confirmError');
const agreeTermsCheck = document.getElementById('agreeTermsError');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{8,})/; 

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        error.forEach(msg => msg.innerText = "");
        errorInput.forEach(input => input.style.borderColor = "");

        if (fullName.value.trim() === "") {
            nameCheck.innerText = "Họ tên không được để trống";
            nameCheck.style.color = "red";
            fullName.style.borderColor = "red";
            return;
        }
        if (email.value.trim() === "") {   
            emailCheck.innerText = "Email không được để trống";
            email.style.borderColor = "red";
            emailCheck.style.color = "red";
            return;
        } else if (!emailRegex.test(email.value)){
            emailCheck.innerText = "Email phải đúng định dạng";
            email.style.borderColor = "red";
            emailCheck.style.color = "red";
            return;
        } 
        if (password.value === "") {
            passwordCheck.innerText = "Mật khẩu không được để trống";
            passwordCheck.style.color = "red";
            password.style.borderColor = "red";
            return;
        } else if(!passwordRegex.test(password.value)) {
            passwordCheck.innerText = "Mật khẩu tối thiểu 8 ký tự và có ít nhất một ký tự đặc biệt";
            password.style.borderColor = "red";
            passwordCheck.style.color = "red";
            return;
        }
        if(confirmPassword.value === ""){
            confirmPasswordCheck.innerText = "Mật khẩu xác nhận không được để trống";
            confirmPassword.style.borderColor = "red";
            confirmPasswordCheck.style.color = "red";
            return; 
        } else if (password.value !== confirmPassword.value) {
            confirmPasswordCheck.innerText = "Mật khẩu không khớp";
            confirmPassword.style.borderColor = "red";
            confirmPasswordCheck.style.color = "red";
            return;
        } 
        if (!agreeTerms.checked) {
            agreeTermsCheck.innerText = "Bạn chưa đồng ý điều khoản!";
            agreeTerms.style.borderColor = "red";
            agreeTermsCheck.style.color = "red";
            return;
        }

        const newAdmin = {
            id: Date.now(),
            fullName: fullName.value.trim(),
            email: email.value.trim(),
            password: password.value,
            role: "admin",
            isActive: true,
            createdAt: new Date().toISOString()
        };

        adminAccounts.push(newAdmin);
        localStorage.setItem('adminAccounts', JSON.stringify(adminAccounts));

        window.location.href = "login.html";
    });
}
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