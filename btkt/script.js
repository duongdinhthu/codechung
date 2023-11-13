// Mẫu các sản phẩm
const products = [
    { code: '001', price: 1000, quantity: 5, amount: 5000, notes: 'Kẹo Big Ba Boom' },
    { code: '002', price: 5000, quantity: 3, amount: 15000, notes: 'Snack Oishi' },
    { code: '003', price: 10000, quantity: 5, amount: 50000, notes: 'Sữa TH'     },
    { code: '004', price: 2000, quantity:10, amount: 20000, notes: 'Kẹo Socola' }, 
];

// Mẫu người truy cập, trong trường hợp này là chính tôi
const user = {
    avatar: 'path/to/avatar.jpg',
    fullName: 'Trần Việt Bách',
    role: 'Admin',
    lastLogin: '2023-11-11 12:30 PM',
}


//Chức năng để tạo bảng
function populateProductTable() {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = `<tr>
            <td>${product.code}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.amount}</td>
            <td>${product.notes}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

//Chức năng của trang hiển thị người dùng
function populateUserInformation() {
    const userInformation = document.querySelector('#userInformation');
    userInformation.innerHTML = `
        <img src="${user.avatar}" alt="User Avatar" class="img-thumbnail">
        <p><strong>Full Name:</strong> ${user.fullName}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Last Login:</strong> ${user.lastLogin}</p>
    `;
}

// chức năng sắp xếp số lượng Amount giảm dần
$("#sort").click(function () {
    sortTableByAmount();
});
function sortTableByAmount() {
    products.sort((a, b) => b.amount - a.amount);
    populateProductTable();
}


// Initial population of tables
populateProductTable();
populateUserInformation();



