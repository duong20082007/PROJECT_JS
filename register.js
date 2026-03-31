let registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{8,})/; 

    if (fullname === "") {
        alert("Họ và tên không được để trống");
        return;
    }

    if (email === "") {
        alert("Email không được để trống");
        return;
    } else if (!emailRegex.test(email)) {
        alert("Email phải đúng định dạng");
        return;
    }

    if (password === "") {
        alert("Mật khẩu không được để trống");
        return;
    } else if (!passwordRegex.test(password)) {
        alert("Mật khẩu tối thiểu 8 ký tự và có ít nhất một ký tự đặc biệt");
        return;
    }

    if (confirmPassword === "") {
        alert("Mật khẩu xác nhận không được để trống");
        return;
    } else if (confirmPassword !== password) {
        alert("Mật khẩu không trùng khớp");
        return;
    }

    if (!agreeTerms) {
        alert("Bạn chưa xác nhận đăng ký (Checked vào ô checkbox)");
        return;
    }

    const newAdmin = {
        fullname,
        email,
        password
    };

    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    const isExisted = admins.some(admin => admin.email === email);
    if (isExisted) return alert("Email này đã được đăng ký!");

    admins.push(newAdmin);
    localStorage.setItem('users', JSON.stringify(admins));

    alert("Đăng ký thành công! Dữ liệu đã được lưu.");
    window.location.href = "login.html"
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