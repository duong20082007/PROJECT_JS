const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (email === "") return alert("Email không được để trống");
    if (password === "") return alert("Mật khẩu không được để trống");

    if (email === "admin@rikkeicinema.com" && password === "Admin@123") {
        alert("Đăng nhập Admin thành công!");
        localStorage.setItem('currentUser', JSON.stringify({ email, role: 'ADMIN' }));
        window.location.href = "index.html"; 
        return;
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