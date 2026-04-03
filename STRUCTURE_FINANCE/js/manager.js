const movies = [
    { id: 1, title: "Dune: Part Two", titleVi: "Hành tinh cát: Phần hai", genres: "Hành động, Viễn tưởng", duration: 166, releasedDate: "01/03/2024", status: 1, posterUrl: "../assets/images/DUne.png" },
    { id: 2, title: "Kung Fu Panda 4", titleVi: "Gấu trúc Kung Fu 4", genres: "Hoạt hình, Hài", duration: 94, releasedDate: "08/03/2024", status: 1, posterUrl: "../assets/images/KungFu Panda 4.webp" },
    { id: 3, title: "Godzilla x Kong", titleVi: "Đế Chế Mới", genres: "Hành động, Viễn tưởng", duration: 115, releasedDate: "29/03/2024", status: 2, posterUrl: "../assets/images/Godzilla.png" },
    { id: 4, title: "Mai", titleVi: "Mai", genres: "Tâm lý, Tình cảm", duration: 131, releasedDate: "10/02/2024", status: 0, posterUrl: "../assets/images/maii.png" },
    { id: 5, title: "Exhuma", titleVi: "Quật Mộ Trùng Ma", genres: "Kinh dị, Bí ẩn", duration: 134, releasedDate: "15/03/2024", status: 1, posterUrl: "../assets/images/Exhuma.webp" },
];

const renderMovies = (data) => {
    const tbody = document.getElementById('movieTableBody');
    if (!tbody) return;
    tbody.innerHTML = "";

    data.forEach((movie) => {
        const tr = document.createElement("tr");

        let statusText = movie.status === 1 ? "Đang chiếu" : (movie.status === 2 ? "Sắp chiếu" : "Đã chiếu");
        let statusClass = movie.status === 1 ? "status-showing" : (movie.status === 2 ? "status-upcoming" : "status-ended");

        tr.innerHTML = `
            <td><img src="${movie.posterUrl}" class="admin-poster"></td>
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
                <i class="fa-solid fa-circle-xmark" title="Xóa"></i>
            </td>
        `;
        tbody.appendChild(tr);
    });
};



const modal = document.getElementById('addMovieModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalX = document.querySelector('.close-modal');
const cancelBtn = document.getElementById('cancelBtn');
const addMovieForm = document.getElementById('addMovieForm');

const toggleModal = (show) => {
    modal.style.display = show ? 'flex' : 'none';
};

if (openModalBtn) openModalBtn.onclick = () => toggleModal(true);
if (closeModalX) closeModalX.onclick = () => toggleModal(false);
if (cancelBtn) cancelBtn.onclick = () => toggleModal(false);

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMovie = {
        id: Date.now(),
        title: document.getElementById('movieTitle').value,
        titleVi: document.getElementById('movieTitle').value,
        genres: document.getElementById('movieGenres').value,
        duration: document.getElementById('movieDuration').value,
        releasedDate: document.getElementById('movieDate').value.split('-').reverse().join('/'),
        status: document.getElementById('movieStatus').value,
        posterUrl: document.getElementById('moviePoster').value || '../assets/images/default.png',
        ticketPrice: document.getElementById('moviePrice').value,
        description: document.getElementById('movieDesc').value
    };
    movies.unshift(newMovie);
    renderMovies(movies);
    addMovieForm.reset();
    toggleModal(false);
});

const editModal = document.getElementById('editMovieModal');
const editForm = document.getElementById('editMovieForm');

const editId = document.getElementById('editMovieId');
const editTitle = document.getElementById('editMovieTitle');
const editGenres = document.getElementById('editMovieGenres');
const editDuration = document.getElementById('editMovieGenres');
const editData = document.getElementById('editMovieGenres');
const editDesc = document.getElementById('editMovieGenres');
const editPoster = document.getElementById('editMovieGenres');
const editStatus = document.getElementById('editMovieGenres');
const editPrice = document.getElementById('editMovieGenres');

const openEditModal = (id) => {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    editId.value = movie.id;
    editTitle.value = movie.title;
    editGenres.value = movie.genres;
    editDuration.value = movie.duration;
    editData.value = movie.releasedDate;
    editDesc.value = movie.description || "";
    editPoster.value = movie.posterUrl;
    editStatus.value = movie.status;
    editPrice.value = movie.ticketPrice || "";

    editModal.style.display = 'flex';
};

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('editMovieId').value;
    const index = movies.findIndex(m => m.id === id);
    
    if (index !== -1) {
        movies[index] = {
            ...movies[index],
            title: document.getElementById('editMovieTitle').value,
            genres: document.getElementById('editMovieGenres').value,
            duration: document.getElementById('editMovieDuration').value,
            releasedDate: document.getElementById('editMovieDate').value,
            description: document.getElementById('editMovieDesc').value,
            posterUrl: document.getElementById('editMoviePoster').value,
            status: document.getElementById('editMovieStatus').value,
            ticketPrice: document.getElementById('editMoviePrice').value
        };
        renderMovies(movies);
        editModal.style.display = 'none';
        alert("Cập nhật thành công!");
    }
});
const closeEdit = document.querySelector('.close-edit-modal');
const closeEditBtn = document.getElementById('closeEditBtn');
const logoutBtn = document.querySelector('.logout-btn');
closeEdit.onclick = () => editModal.style.display = 'none';
closeEditBtn.onclick = () => editModal.style.display = 'none';

const setupLogout = () => {

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = "login.html"; 
        });
    }
};

setupLogout();
renderMovies(movies);
setupFilter();