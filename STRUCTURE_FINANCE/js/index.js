// --- 1. KHỞI TẠO DỮ LIỆU (TRỌC MẢNG 5 PHIM TỪ ẢNH JSON) ---
let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies = [
        {
            id: 1,
            title: "Dune: Part Two",
            titleVi: "Dune: Hành Tinh Cát - Phần 2",
            genres: "Hành động, Viễn tưởng",
            duration: 166,
            releasedDate: "01/03/2024",
            status: 1, // Đang chiếu
            posterUrl: "../assets/images/DUne.png",
            description: "Tiếp nối phần trước, Paul Atreides hợp nhất với Fremen để trả thù gia tộc Harkonnen...",
            trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
            ticketPrice: 95000
        },
        {
            id: 2,
            title: "Kung Fu Panda 4",
            titleVi: "Kung Fu Panda 4",
            genres: "Hoạt hình, Hài",
            duration: 94,
            releasedDate: "08/03/2024",
            status: 1, // Đang chiếu
            posterUrl: "../assets/images/KungFu Panda 4.webp",
            description: "Po tiếp tục hành trình trở thành Chiến binh Rồng, đối mặt với kẻ thù mới...",
            trailerUrl: "https://www.youtube.com/embed/l6S7U2-G6E0",
            ticketPrice: 80000
        },
        {
            id: 3,
            title: "Godzilla x Kong: The New Empire",
            titleVi: "Godzilla x Kong: Đế Chế Mới",
            genres: "Hành động, Viễn tưởng",
            duration: 115,
            releasedDate: "29/03/2024",
            status: 1, // Đổi thành 1 để hiện ra danh sách Đang chiếu
            posterUrl: "../assets/images/Godzilla.png",
            description: "Godzilla và Kong hợp sức chống lại mối đe dọa mới từ lòng đất.",
            trailerUrl: "https://www.youtube.com/embed/lV1OOlGwExM",
            ticketPrice: 80000
        },
        {
            id: 4,
            title: "Mai",
            titleVi: "Mai",
            genres: "Tâm lý, Tình cảm",
            duration: 131,
            releasedDate: "10/02/2024",
            status: 1, // Đang chiếu
            posterUrl: "../assets/images/maii.png",
            description: "Câu chuyện về một người phụ nữ mạnh mẽ đối mặt với những biến cố...",
            trailerUrl: "https://www.youtube.com/embed/ex3CidR6Jj8",
            ticketPrice: 80000
        },
        {
            id: 5,
            title: "Exhuma",
            titleVi: "Exhuma: Quật Mộ Trùng Ma",
            genres: "Kinh dị, Bí ẩn",
            duration: 134,
            releasedDate: "15/03/2024",
            status: 1, // Đang chiếu
            posterUrl: "../assets/images/Exhuma.webp",
            description: "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt lời nguyền...",
            trailerUrl: "https://www.youtube.com/embed/fNIDASm5_X4",
            ticketPrice: 80000
        }
    ];
    localStorage.setItem('movies', JSON.stringify(movies));


// --- 2. RENDER GIAO DIỆN ---

// Hàm đổ dữ liệu vào Hero Banner
const renderHero = () => {
    const hero = document.getElementById('heroSection');
    const hotMovie = movies.find(m => m.status === 1) || movies[0];
    if (!hero || !hotMovie) return;

    hero.innerHTML = `
        <div class="hero-content">
            <span class="status">● Đang thịnh hành</span>
            <h1>${hotMovie.titleVi}</h1>
            <p>${hotMovie.description}</p>
            <div class="btns">
                <button class="btn-red" onclick="handleBooking(${hotMovie.id})">Đặt Vé Ngay</button>
                <button class="btn-outline" onclick="openTrailer('${hotMovie.trailerUrl}')">Xem Trailer</button>
            </div>
        </div>
    `;
};

// Hàm đổ 5 phim vào Grid (render toàn bộ mảng movies)
const renderMovies = () => {
    const grid = document.getElementById('movieGrid');
    if (!grid) return;

    // Render toàn bộ 5 phim trong mảng
    grid.innerHTML = movies.map(m => `
        <div class="movie-card">
            <img src="${m.posterUrl}" alt="${m.title}" onerror="this.src='https://via.placeholder.com/300x450'">
            <div class="info">
                <h3>${m.titleVi}</h3>
                <p>${m.duration} phút • ${m.genres}</p>
                <button class="btn-buy" onclick="handleBooking(${m.id})">Mua Vé</button>
            </div>
        </div>
    `).join('');
};

// --- 3. 2 CHỨC NĂNG CHÍNH ---

// Chức năng 1: Mua vé (Kiểm tra đăng nhập)
const handleBooking = (id) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        alert("Bạn cần đăng nhập để thực hiện chức năng mua vé!");
        window.location.href = "login.html";
    } else {
        // Nếu đã login, chuyển hướng tới trang chọn ghế kèm ID phim
        window.location.href = `booking.html?id=${id}`;
    }
};

// Chức năng 2: Xem Trailer (Mở Modal)
const openTrailer = (url) => {
    if (!url) return alert("Trailer đang được cập nhật!");
    const modal = document.getElementById('trailerModal');
    const video = document.getElementById('trailerVideo');
    
    video.src = url; // Gán link embed vào iframe
    modal.style.display = "flex"; // Hiện modal
};

// Đóng Modal khi nhấn nút X
document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('trailerModal').style.display = "none";
    document.getElementById('trailerVideo').src = ""; // Tắt tiếng video khi đóng
});

// Khởi chạy
renderHero();
renderMovies();