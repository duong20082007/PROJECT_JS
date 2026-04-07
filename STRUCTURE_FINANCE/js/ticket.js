// --- 1. DỮ LIỆU & BIẾN CỐ ĐỊNH ---
const ticketPrice = 90000;
const initialTickets = [
    {
        id: 1001,
        ticketCode: "VE-1001",
        customerName: "Nguyễn Văn A",
        customerPhone: "0987654321",
        movieTitle: "Dune: Hành Tinh Cát - Phần 2",
        showDate: "2026-03-15",
        showTime: "10:00",
        seats: ["F12", "F13"],
        totalAmount: 180000,
        statusDisplay: "Đã Thanh Toán"
    },
    {
        id: 1002,
        ticketCode: "VE-1002",
        customerName: "Trần Thị B",
        customerPhone: "0912654321",
        movieTitle: "Mai",
        showDate: "2026-03-16",
        showTime: "13:30",
        seats: ["G5"],
        totalAmount: 90000,
        statusDisplay: "Chờ xử lý"
    },
    {
        id: 1003,
        ticketCode: "VE-1003",
        customerName: "Lê Văn C",
        customerPhone: "0905654321",
        movieTitle: "Kung Fu Panda 4",
        showDate: "2026-03-17",
        showTime: "19:00",
        seats: ["H10", "H11", "H12"],
        totalAmount: 270000,
        statusDisplay: "Đã Thanh Toán"
    },
    {
        id: 1004,
        ticketCode: "VE-1004",
        customerName: "Phạm Minh D",
        customerPhone: "0853654321",
        movieTitle: "Exhuma: Quật Mộ Trùng Ma",
        showDate: "2026-03-14",
        showTime: "21:45",
        seats: ["E8"],
        totalAmount: 90000,
        statusDisplay: "Đã hủy"
    },
    {
        id: 1005,
        ticketCode: "VE-1005",
        customerName: "Hoàng Yến E",
        customerPhone: "0977654321",
        movieTitle: "Godzilla x Kong: Đế Chế Mới",
        showDate: "2026-03-18",
        showTime: "09:15",
        seats: ["D4", "D5"],
        totalAmount: 180000,
        statusDisplay: "Chờ xử lý"
    }
];
let tickets = JSON.parse(localStorage.getItem('tickets')) || initialTickets;

const addModal = document.getElementById('addTicketModal');
const editModal = document.getElementById('editTicketModal');
const deleteModal = document.getElementById('deleteTicketModal');

const saveAndRender = () => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
    renderTickets();
};

const toggleModal = (modal, show) => {
    if (modal) modal.style.display = show ? 'flex' : 'none';
};

const updatePriceUI = (inputID, countID, priceID) => {
    const input = document.getElementById(inputID);
    const seats = input.value.split(',').map(s => s.trim()).filter(s => s !== "");
    const total = seats.length * ticketPrice;
    
    document.getElementById(countID).innerText = `Tổng số ghế: ${seats.length}`;
    document.getElementById(priceID).innerText = `${total.toLocaleString()}đ`;
    return { seats, total };
};

const renderTickets = () => {
    const tbody = document.getElementById('ticketTableBody');
    if (!tbody) return;
    tbody.innerHTML = "";

    tickets.forEach((item) => {
        const tr = document.createElement("tr");
        const statusClass = item.statusDisplay === "Đã Thanh Toán" ? "paid" : (item.statusDisplay === "Chờ xử lý" ? "pending" : "cancelled");

        tr.innerHTML = `
            <td class="ticket-code-td">#${item.ticketCode}</td>
            <td><strong>${item.customerName}</strong></td>
            <td>${item.movieTitle}</td>
            <td>${item.showTime}</td>
            <td>${item.seats.map(s => `<span class="seat-tag">${s}</span>`).join('')}</td>
            <td><strong>${item.totalAmount.toLocaleString()}đ</strong></td>
            <td><span class="status-badge ${statusClass}">${item.statusDisplay}</span></td>
            <td class="actions">
                <i class="fa-solid fa-pen js-edit" data-id="${item.id}" title="Sửa"></i>
                <i class="fa-solid fa-circle-xmark js-delete" data-id="${item.id}" title="Xóa"></i>
            </td>
        `;
        
        tr.querySelector('.js-edit').addEventListener('click', () => openEdit(item.id));
        tr.querySelector('.js-delete').addEventListener('click', () => openDelete(item.id));

        tbody.appendChild(tr);
    });
};

const openEdit = (id) => {
    const ticket = tickets.find(t => t.id === id);
    if (!ticket) return;

    document.getElementById('editTicketId').value = ticket.id;
    document.getElementById('editTicketCode').innerText = `Mã vé: #${ticket.ticketCode}`;
    document.getElementById('editCustName').value = ticket.customerName;
    document.getElementById('editMovieSelect').value = ticket.movieTitle;
    document.getElementById('editShowtimeSelect').value = ticket.showTime;
    document.getElementById('editSeats').value = ticket.seats.join(', ');
    
    updatePriceUI('editSeats', 'editSeatCount', 'editTotalAmount');
    toggleModal(editModal, true);
};

const openDelete = (id) => {
    const ticket = tickets.find(t => t.id === id);
    if (!ticket) return;

    document.getElementById('deleteTicketId').value = id;
    document.getElementById('deleteTicketCodeText').innerText = `#${ticket.ticketCode}`;
    toggleModal(deleteModal, true);
};

document.addEventListener('DOMContentLoaded', () => {
    renderTickets();

    const allModals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.btn-cancel, .close-modal');
    const modalContainers = document.querySelectorAll('.js-modal-container, .delete-modal-content');
    const btnOpenAdd = document.querySelector('.btn-add-ticket');

    if (btnOpenAdd) {
        btnOpenAdd.addEventListener('click', () => toggleModal(addModal, true));
    }

    document.getElementById('addSeats').addEventListener('input', () => updatePriceUI('addSeats', 'addSeatCount', 'addTotalAmount'));
    document.getElementById('editSeats').addEventListener('input', () => updatePriceUI('editSeats', 'editSeatCount', 'editTotalAmount'));

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            allModals.forEach(modal => toggleModal(modal, false));
        });
    });

    allModals.forEach(m => {
        m.addEventListener('click', () => toggleModal(m, false));
    });

    modalContainers.forEach(c => {
        c.addEventListener('click', (e) => e.stopPropagation());
    });

    document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
        const id = +document.getElementById('deleteTicketId').value;
        tickets = tickets.filter(t => t.id !== id);
        saveAndRender();
        toggleModal(deleteModal, false);
    });

    document.getElementById('addTicketForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const { seats, total } = updatePriceUI('addSeats', 'addSeatCount', 'addTotalAmount');
        const newTicket = {
            id: Date.now(),
            ticketCode: `VE-${Math.floor(1000 + Math.random() * 9000)}`,
            customerName: document.getElementById('addCustName').value,
            movieTitle: document.getElementById('addMovieSelect').value,
            showTime: document.getElementById('addShowtimeSelect').value,
            seats, totalAmount: total, statusDisplay: "Chờ xử lý"
        };
        tickets.unshift(newTicket);
        saveAndRender();
        toggleModal(addModal, false);
        e.target.reset();
        document.getElementById('addTotalAmount').innerText = "0đ";
    });

    document.getElementById('editTicketForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const id = +document.getElementById('editTicketId').value;
        const index = tickets.findIndex(t => t.id === id);
        const { seats, total } = updatePriceUI('editSeats', 'editSeatCount', 'editTotalAmount');

        if (index !== -1) {
            tickets[index] = { 
                ...tickets[index], 
                movieTitle: document.getElementById('editMovieSelect').value,
                showTime: document.getElementById('editShowtimeSelect').value,
                seats, totalAmount: total 
            };
            saveAndRender();
            toggleModal(editModal, false);
        }
    });
});