const initialMovies = [
    { 
        id: 1, 
        title: "Dune: Part Two", 
        titleVi: "Hành tinh cát: Phần hai", 
        genres: "Hành động, Viễn tưởng", 
        duration: 166, 
        releasedDate: "01/03/2024", 
        status: 1, 
        posterUrl: "../assets/images/DUne.png" 
    },
    { 
        id: 2, 
        title: "Kung Fu Panda 4", 
        titleVi: "Gấu trúc Kung Fu 4", 
        genres: "Hoạt hình, Hài", 
        duration: 94, 
        releasedDate: "08/03/2024", 
        status: 1, 
        posterUrl: "../assets/images/KungFu Panda 4.webp" 
    },
    { 
        id: 3, 
        title: "Godzilla x Kong", 
        titleVi: "Đế Chế Mới", 
        genres: "Hành động, Viễn tưởng", 
        duration: 115, 
        releasedDate: "29/03/2024", 
        status: 2, 
        posterUrl: "../assets/images/Godzilla.png" 
    },
    { 
        id: 4, 
        title: "Mai", 
        titleVi: "Mai", 
        genres: "Tâm lý, Tình cảm", 
        duration: 131, 
        releasedDate: "10/02/2024", 
        status: 0, 
        posterUrl: "../assets/images/maii.png" 
    },
    { 
        id: 5, 
        title: "Exhuma", 
        titleVi: "Quật Mộ Trùng Ma", 
        genres: "Kinh dị, Bí ẩn", 
        duration: 134, 
        releasedDate: "15/03/2024", 
        status: 1, 
        posterUrl: "../assets/images/Exhuma.png" 
    },
    { 
        id: 6, 
        title: "Deadpool & Wolverine", 
        titleVi: "Deadpool & Wolverine", 
        genres: "Hành động, Hài", 
        duration: 125, 
        releasedDate: "26/07/2024", 
        status: 2, 
        posterUrl: "../assets/images/Deadpool.png" 
    },
    { 
        id: 7, 
        title: "The First Omen", 
        titleVi: "Điềm Báo Đầu Tiên", 
        genres: "Kinh dị", 
        duration: 119, 
        releasedDate: "05/04/2024", 
        status: 1, 
        posterUrl: "../assets/images/Omen.png" 
    },
    { 
        id: 8, 
        title: "B4S: Trước Giờ Yêu", 
        titleVi: "Trước Giờ Yêu", 
        genres: "Tình cảm, Hài", 
        duration: 90, 
        releasedDate: "19/04/2024", 
        status: 1, 
        posterUrl: "../assets/images/B4S.png" 
    },
    { 
        id: 9, 
        title: "Barbie", 
        titleVi: "Barbie", 
        genres: "Hài", 
        duration: 114, 
        releasedDate: "21/07/2023", 
        status: 0, 
        posterUrl: "../assets/images/Barbie.png" 
    },
    { 
        id: 10, 
        title: "Avatar: The Way of Water", 
        titleVi: "Avatar 2",
        genres: "Viễn tưởng", 
        duration: 192, 
        releasedDate: "16/12/2022", 
        status: 0, 
        posterUrl: "../assets/images/Avatar2.png" 
    },
    { 
        id: 11, 
        title: "Abigail", 
        titleVi: "Abigail", 
        genres: "Kinh dị", 
        duration: 109, 
        releasedDate: "19/04/2024", 
        status: 1, 
        posterUrl: "../assets/images/Abigail.png" 
    },
    { 
        id: 12, 
        title: "Gặp Lại Chị Bầu", 
        titleVi: "Gặp Lại Chị Bầu", 
        genres: "Hài, Tình cảm", 
        duration: 92, 
        releasedDate: "10/02/2024", 
        status: 0, 
        posterUrl: "../assets/images/GapLaiChiBau.png" 
    },
    { 
        id: 13, 
        title: "Joker: Folie à Deux", 
        titleVi: "Joker 2", 
        genres: "Tâm lý, Nhạc kịch",
        duration: 130, 
        releasedDate: "04/10/2024", 
        status: 2, 
        posterUrl: "../assets/images/Joker.png" 
    },
    { 
        id: 14, 
        title: "Dune (2021)", 
        titleVi: "Hành Tinh Cát", 
        genres: "Viễn tưởng", 
        duration: 155, 
        releasedDate: "22/10/2021", 
        status: 0, 
        posterUrl: "../assets/images/Dune1.png" 
    },
    { 
        id: 15, 
        title: "The Batman (2022)", 
        titleVi: "Người Dơi", 
        genres: "Hành động", 
        duration: 176, 
        releasedDate: "04/03/2022", 
        status: 0, 
        posterUrl: "../assets/images/Batman.png" 
    },
    { 
        id: 16, 
        title: "Furiosa: A Mad Max Saga", 
        titleVi: "Furiosa: Câu Chuyện Từ Mad Max", 
        genres: "Hành động, Phiêu lưu", 
        duration: 148, 
        releasedDate: "24/05/2024", 
        status: 2, 
        posterUrl: "../assets/images/Furiosa.png" 
    },
    { 
        id: 17, 
        title: "Spider-Man: No Way Home", 
        titleVi: "Người Nhện: Không Còn Nhà", 
        genres: "Hành động", 
        duration: 148, 
        releasedDate: "17/12/2021", 
        status: 0, 
        posterUrl: "../assets/images/Spiderman.png" 
    },
    { 
        id: 18, 
        title: "Oppenheimer", 
        titleVi: "Oppenheimer", 
        genres: "Lịch sử", 
        duration: 180, 
        releasedDate: "21/07/2023", 
        status: 0, 
        posterUrl: "../assets/images/Oppen.png" 
    },
    { 
        id: 19, 
        title: "Monkey Man", 
        titleVi: "Thoát Xác", 
        genres: "Hành động, Kịch tính", 
        duration: 121, 
        releasedDate: "05/04/2024", 
        status: 1, 
        posterUrl: "../assets/images/MonkeyMan.png" 
    },
    {
        id: 20, 
        title: "Past Lives", 
        titleVi: "Muôn Kiếp Nhân Duyên", 
        genres: "Tâm lý",
        duration: 105, 
        releasedDate: "02/06/2023", 
        status: 0, 
        posterUrl: "../assets/images/PastLives.png" 
    },
    { 
        id: 21, 
        title: "Civil War", 
        titleVi: "Ngày Tàn Của Đế Quốc", 
        genres: "Hành động, Chiến tranh", 
        duration: 109, 
        releasedDate: "12/04/2024", 
        status: 1, 
        posterUrl: "../assets/images/CivilWar.png" 
    },
    { 
        id: 22, 
        title: "The Marvels", 
        titleVi: "Biệt Đội Marvel", 
        genres: "Hành động", 
        duration: 105, 
        releasedDate: "10/11/2023", 
        status: 0, 
        posterUrl: "../assets/images/Marvels.png" 
    },
    { 
        id: 23, 
        title: "Kingdom of the Planet of the Apes", 
        titleVi: "Hành Tinh Khỉ: Vương Quốc Mới", 
        genres: "Hành động, Viễn tưởng", 
        duration: 145, 
        releasedDate: "10/05/2024", 
        status: 2, 
        posterUrl: "../assets/images/Apes.png" 
    },
    { 
        id: 24, 
        title: "Aquaman 2", 
        titleVi: "Aquaman & Vương Quốc Thất Lạc", 
        genres: "Hành động", 
        duration: 124, 
        releasedDate: "22/12/2023", 
        status: 0, 
        posterUrl: "../assets/images/Aqua2.png" 
    }

];

let movies = JSON.parse(localStorage.getItem("movies")) || initialMovies;

let currentPage = 1;
const itemsPerPage = 5;
let currentFilter = "all"; 
let searchQuery = "";

const saveToLocal = () => {
    localStorage.setItem("movies", JSON.stringify(movies));
};

const loadFromLocal = () => {
    const data = localStorage.getItem("movies");
    if (data) {
        movies.length = 0; 
        movies.push(...JSON.parse(data));
    }
};


const renderMovies = () => {
    const tbody = document.getElementById('movieTableBody');

    let filteredData = movies.filter(m => {
        const titleMatch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
        const statusMatch = currentFilter === "all" || m.status.toString() === currentFilter;
        return titleMatch && statusMatch;
    });

    // Tính toán phân trang
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    tbody.innerHTML = "";
        paginatedData.forEach((movie) => {
            let statusText = movie.status === 1 ? "Đang chiếu" : (movie.status === 2 ? "Sắp chiếu" : "Đã chiếu");
            let statusClass = movie.status === 1 ? "status-showing" : (movie.status === 2 ? "status-upcoming" : "status-ended");

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><img src="${movie.posterUrl}" class="admin-poster" onerror="this.src='https://via.placeholder.com/50x75'"></td>
                <td>
                    <strong>${movie.title}</strong><br>
                    <small style="color: #94a3b8; font-size: 11px;">${movie.titleVi}</small>
                </td>
                <td>
                    <div class="genres-box">
                        ${movie.genres.split(', ').map(g => `<span>${g}</span>`).join('')}
                    </div>
                </td>
                <td><strong>${movie.duration}</strong><br><small style="color: #94a3b8">phút</small></td>
                <td>${movie.releasedDate}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td class="actions">
                    <i class="fa-solid fa-pen" title="Sửa" onclick="openEditModal(${movie.id})"></i>
                    <i class="fa-solid fa-circle-xmark" title="Xóa" id="deleteMovieName" onclick = "btnDelete(${movie.id})")"></i>
                </td>
            `;
            tbody.appendChild(tr);
        });
    updatePaginationUI(totalPages, totalItems, startIndex, paginatedData.length);
};

const container = document.getElementById('paginationContainer');

const updatePaginationUI = (totalPages, totalItems, start, currentCount) => {
    if (!container) return;

    let html = `
        <div class="page-info">Hiển thị <strong>${totalItems === 0 ? 0 : start + 1}-${start + currentCount}</strong> trên <strong>${totalItems}</strong> phim</div>
        <div class="page-controls">
            <button class="ctrl-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-num ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }

    html += `
            <button class="ctrl-btn" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    `;
    container.innerHTML = html;
};

const changePage = (page) => {
    currentPage = page;
    renderMovies();
};


const confirmDeleteBtn = document.getElementById('deleteMovieName');

const btnDelete = (id) => {
    const deleteById = movies.find(m => m.id === id)
    if (confirm(`Bạn có chắc muốn xóa phim ${deleteById.title} không`)) {
        movies = movies.filter(m => m.id !== id); 
        saveToLocal(); 
        renderMovies();
    }
}

confirmDeleteBtn.addEventListener("click", btnDelete )


let searchInputElement = document.getElementById("searchInput");

const filterNameMovies = () => {
    let nameMovies = searchInputElement.value.toLowerCase();
    
    let allMovies = JSON.parse(localStorage.getItem("movies")) || initialMovies; 

    if (nameMovies === "") {
        listMovies = allMovies;
    } else {
        listMovies = allMovies.filter((product) => {
            return product.title.toLowerCase().includes(nameMovies) || 
                   product.titleVi.toLowerCase().includes(nameMovies);
        });
    }
    searchQuery = searchInputElement.value.toLowerCase();

    currentPage = 1; 
    
    renderMovies(); 
};
searchInputElement.addEventListener("keyup", filterNameMovies);

const setupFilter = () => {

    const tabs = document.querySelectorAll('.filter-tab');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {

            document.querySelector('.filter-tab.active').classList.remove('active');

            tab.classList.add('active');

            if (index === 0){  
                currentFilter = "all"; 
            } else if (index === 1){
                currentFilter = "1"; 
            } else if (index === 2){
                currentFilter = "2"; 
            } else if (index === 3){
                currentFilter = "0"; 
            } 

            currentPage = 1;

            renderMovies(); 
        });
    });
};

const modal = document.getElementById('addMovieModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalX = document.getElementById('close-modal');
const cancelBtn = document.getElementById('cancelBtn');
const addMovieForm = document.getElementById('addMovieForm');

const toggleModal = (show) => {
    modal.style.display = show ? 'flex' : 'none';
};

if (openModalBtn){
    openModalBtn.onclick = () => toggleModal(true);
} 
if (closeModalX){
    closeModalX.onclick = () => toggleModal(false);
}
if (cancelBtn) {
    cancelBtn.onclick = () => toggleModal(false);
}
const titleCheck = document.getElementById('movieTitle');
const genresCheck = document.getElementById('movieGenres');
const durationCheck = document.getElementById('movieDuration');
const releasedDateCheck = document.getElementById('movieDate');
const statusCheck = document.getElementById('movieStatus');
const posterUrlCheck = document.getElementById('moviePoster');
const descriptionCheck = document.getElementById('movieDesc');
    
addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('movieTitle');
    const titleCheck = document.getElementById('movieTitleErr');
    const genres = document.getElementById('movieGenres');
    const genresCheck = document.getElementById('movieGenresErr');
    const duration = document.getElementById('movieDuration');
    const durationCheck = document.getElementById('movieDurationErr');
    const releasedDate = document.getElementById('movieDate');
    const releasedDateCheck = document.getElementById('movieDateErr');
    const posterUrl = document.getElementById('moviePoster');
    const posterUrlCheck = document.getElementById('moviePosterErr');
    const description = document.getElementById('movieDesc');
    const descriptionCheck = document.getElementById('movieDescErr');

    if (title.value.trim() === "") {
        titleCheck.innerText = "Tên phim không được để trống";
        titleCheck.style.color = "red";
        title.style.borderColor = "red";
        return;
    } else {
        titleCheck.innerText = "";
        title.style.borderColor = "white";
    }

    if (genres.value.trim() === "") {
        genresCheck.innerText = "Thể loại không được để trống";
        genresCheck.style.color = "red";
        genres.style.borderColor = "red";
        return;
    } else {
        genresCheck.innerText = "";
        genres.style.borderColor = "white";
    }

    if (duration.value.trim() === "" || +duration.value <= 0) {
        durationCheck.innerText = "Thời lượng không được để trống và phải hợp lệ";
        durationCheck.style.color = "red";
        duration.style.borderColor = "red";
        return;
    } else {
        durationCheck.innerText = "";
        duration.style.borderColor = "white";
    }

    if (releasedDate.value === "") {
        releasedDateCheck.innerText = "Ngày khởi chiếu không được để trống";
        releasedDateCheck.style.color = "red";
        releasedDate.style.borderColor = "red";
        return;
    } else {
        releasedDateCheck.innerText = "";
        releasedDate.style.borderColor = "white";
    }

    if (posterUrl.value.trim() === "") {
        posterUrlCheck.innerText = "URL ảnh không được để trống";
        posterUrlCheck.style.color = "red";
        posterUrl.style.borderColor = "red";
        return;
    }
    if (posterUrl.value.startsWith("http") || posterUrl.value.startsWith("https")) {
        posterUrlCheck.innerText = "URL phải bắt đầu bằng http hoặc ../";
        posterUrlCheck.style.color = "red";
        posterUrl.style.borderColor = "red";
        return;
    } else {
        posterUrlCheck.innerText = "";
        posterUrl.style.borderColor = "white";
    }

    if (description.value.trim() === "") {
        descriptionCheck.innerText = "Mô tả không được để trống";
        descriptionCheck.style.color = "red";
        description.style.borderColor = "red";
        return;
    } else {
        descriptionCheck.innerText = "";
        description.style.borderColor = "white";
    }

    const newMovie = {
        id: Date.now(),
        title: document.getElementById('movieTitle').value,
        titleVi: document.getElementById('movieTitle').value,
        genres: document.getElementById('movieGenres').value,
        duration: document.getElementById('movieDuration').value,
        releasedDate: document.getElementById('movieDate').value.split('-').reverse().join('/'),
        status: +document.getElementById('movieStatus').value,
        posterUrl: document.getElementById('moviePoster').value || "../assets/images/default.png",
        ticketPrice: document.getElementById('moviePrice').value,
        description: document.getElementById('movieDesc').value
    };

    movies.unshift(newMovie);

    saveToLocal();
    renderMovies();

    document.getElementById('movieTitle').value = "";
    document.getElementById('movieGenres').value = "Hành động, Viễn tưởng"; 
    document.getElementById('movieDuration').value = "";
    document.getElementById('movieDate').value = "";
    document.getElementById('movieStatus').value = "1"; 
    document.getElementById('moviePrice').value = "";
    document.getElementById('moviePoster').value = "";
    document.getElementById('movieDesc').value = "";

    toggleModal(false);
});

const editModal = document.getElementById('editMovieModal');
const editForm = document.getElementById('editMovieForm');

const editId = document.getElementById('editMovieId');
const editTitle = document.getElementById('editMovieTitle');
const editGenres = document.getElementById('editMovieGenres');
const editDuration = document.getElementById('editMovieDuration'); 
const editDate = document.getElementById('editMovieDate');         
const editDesc = document.getElementById('editMovieDesc');         
const editPoster = document.getElementById('editMoviePoster');   
const editStatus = document.getElementById('editMovieStatus');    
const editPrice = document.getElementById('editMoviePrice');

const openEditModal = (id) => {
    const movie = movies.find(m => m.id === id);

    editId.value = movie.id;
    editTitle.value = movie.title;
    editGenres.value = movie.genres;
    editId.value = movie.id;
    editTitle.value = movie.title;
    editGenres.value = movie.genres;
    editDuration.value = movie.duration;
    editDate.value = movie.releasedDate;
    editDesc.value = movie.description || "";
    editPoster.value = movie.posterUrl;
    editStatus.value = movie.status;
    editPrice.value = movie.ticketPrice || "";

    editModal.style.display = 'flex';
};

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const editTitleCheck = document.getElementById('editMovieModal');
    const title = document.getElementById('movieTitle');
    const titleCheck = document.getElementById('movieTitleErr');
    const genres = document.getElementById('movieGenres');
    const genresCheck = document.getElementById('movieGenresErr');
    const duration = document.getElementById('movieDuration');
    const durationCheck = document.getElementById('movieDurationErr');
    const releasedDate = document.getElementById('movieDate');
    const releasedDateCheck = document.getElementById('movieDateErr');
    const posterUrl = document.getElementById('moviePoster');
    const posterUrlCheck = document.getElementById('moviePosterErr');
    const description = document.getElementById('movieDesc');
    const descriptionCheck = document.getElementById('movieDescErr');

    if (editTitle.value.trim() === "") {
        editTitleCheck.innerText = "Tên phim không được để trống";
        editTitleCheck.style.color = "red";
        editTitle.style.borderColor = "red";
        return;
    } else {
        editTitleCheck.innerText = "";
        editTitle.style.borderColor = "white";
    }

    if (title.value.trim() === "") {
        titleCheck.innerText = "Tên phim không được để trống";
        titleCheck.style.color = "red";
        title.style.borderColor = "red";
        return;
    } else {
        titleCheck.innerText = "";
        title.style.borderColor = "white";
    }

    if (genres.value.trim() === "") {
        genresCheck.innerText = "Thể loại không được để trống";
        genresCheck.style.color = "red";
        genres.style.borderColor = "red";
        return;
    } else {
        genresCheck.innerText = "";
        genres.style.borderColor = "white";
    }

    if (duration.value.trim() === "" || Number(duration.value) <= 0) {
        durationCheck.innerText = "Thời lượng không được để trống và phải hợp lệ";
        durationCheck.style.color = "red";
        duration.style.borderColor = "red";
        return;
    } else {
        durationCheck.innerText = "";
        duration.style.borderColor = "white";
    }

    if (releasedDate.value === "") {
        releasedDateCheck.innerText = "Ngày khởi chiếu không được để trống";
        releasedDateCheck.style.color = "red";
        releasedDate.style.borderColor = "red";
        return;
    } else {
        releasedDateCheck.innerText = "";
        releasedDate.style.borderColor = "white";
    }

    if (posterUrl.value.trim() === "") {
        posterUrlCheck.innerText = "URL ảnh không được để trống";
        posterUrlCheck.style.color = "red";
        posterUrl.style.borderColor = "red";
        return;
    }
    if (posterUrl.value.startsWith("http") || posterUrl.value.startsWith("https") ) {
        posterUrlCheck.innerText = "URL phải bắt đầu bằng http hoặc ../";
        posterUrlCheck.style.color = "red";
        posterUrl.style.borderColor = "red";
        return;
    } else {
        posterUrlCheck.innerText = "";
        posterUrl.style.borderColor = "white";
    }

    if (description.value.trim() === "") {
        descriptionCheck.innerText = "Mô tả không được để trống";
        descriptionCheck.style.color = "red";
        description.style.borderColor = "red";
        return;
    } else {
        descriptionCheck.innerText = "";
        description.style.borderColor = "white";
    }

    const id = +document.getElementById('editMovieId').value;
    const index = movies.findIndex(m => m.id === id);
    
    if (index !== -1) {
        movies[index] = {
            ...movies[index],
            title: document.getElementById('editMovieTitle').value,
            genres: document.getElementById('editMovieGenres').value,
            duration: +document.getElementById('editMovieDuration').value, 
            releasedDate: document.getElementById('editMovieDate').value,
            description: document.getElementById('editMovieDesc').value,
            posterUrl: document.getElementById('editMoviePoster').value,
            status: +document.getElementById('editMovieStatus').value,
            ticketPrice: document.getElementById('editMoviePrice').value
        };
        
        saveToLocal(); 
        renderMovies();
        editModal.style.display = 'none';
    }
});

const closeEditModel = document.getElementById('close-edit-modal');
const closeEditBtn = document.getElementById('closeEditBtn');

closeEditModel.onclick = () => editModal.style.display = 'none';
closeEditBtn.onclick = () => editModal.style.display = 'none';

const logoutBtn = document.querySelector('.logout-btn');
const setupLogout = () => {
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if(confirm("Đăng xuất ngay?")) {
                window.location.href = "login.html"; 
            } 
        });
    }
};

setupLogout();
loadFromLocal();
setupFilter();
renderMovies();
