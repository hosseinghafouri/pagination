const listItems = [
    { id: 1, name: 'Taymaz', lastName: 'Mostafaei' },
    { id: 2, name: 'Amir', lastName: 'Zehtab' },
    { id: 3, name: 'Qadir', lastName: 'Yolme' },
    { id: 4, name: 'Babak', lastName: 'Mohammadi' },
    { id: 5, name: 'Ali', lastName: 'Badri' },

    { id: 6, name: 'Nazanin', lastName: 'Baba poor' },
    { id: 7, name: 'Negare', lastName: 'Shiri' },
    { id: 8, name: 'Asghar', lastName: 'Azadeh' },
    { id: 9, name: 'Maryam', lastName: 'Gasemi' },
    { id: 10, name: 'Hesam', lastName: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', lastName: 'Farmandeh' },
    { id: 12, name: 'Siamak', lastName: 'Modiri' },
    { id: 13, name: 'Mohsen', lastName: 'Ansari' },
    { id: 14, name: 'Mehran', lastName: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', lastName: 'Mahtabi' },

    { id: 16, name: 'Hossein', lastName: 'Ghafouri' },
    { id: 17, name: 'Melika', lastName: 'Ehsani' },
    { id: 18, name: 'Hasan', lastName: 'Nik manesh' },
    { id: 19, name: 'Fatemeh', lastName: 'Alilou' },
    { id: 20, name: 'Ehsan', lastName: 'Tayyebi' },

    { id: 21, name: 'Zahra', lastName: 'Gholami' },
    { id: 22, name: 'Matin', lastName: 'Sahebi' }
    
];

let userListContainer = document.querySelector('#list');
let paginationContainer = document.querySelector('#pagination');

let currentPage = 1;
let rowsCount = 5;

function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = '';

    let endIndex = rowsCount * currentPage;
    let startIndex = endIndex - rowsCount;

    let paginatedUsers = allUesrsArray.slice(startIndex, endIndex);

    paginatedUsers.forEach(function (user) {
        let userElement = document.createElement('div');
        userElement.classList.add('item');
        userElement.innerHTML = user.name + ' ' + user.lastName;

        usersContainer.appendChild(userElement);
    });
    console.log(paginatedUsers);
};

function setupPagination(allUesrsArray, paginationContainer, rowsCount) {
    paginationContainer.innerHTML = '';

    let pageCount = Math.ceil(allUesrsArray.length / rowsCount);

    for (let index = 1; index < pageCount + 1; index++) {
        let btn = paginationBtnGenerate(allUesrsArray, index);
        paginationContainer.appendChild(btn);
    };
};

function paginationBtnGenerate(allUesrsArray, page) {
    let btnElement = document.createElement("button");
    btnElement.innerHTML = page;

    if (currentPage === page) {
        btnElement.classList.add("active");
    };

    btnElement.addEventListener('click', ()=>{
        currentPage = page;
        displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage);
        setupPagination(allUesrsArray, paginationContainer, rowsCount);
    });
        return btnElement;
};

displayUesrsList(listItems, userListContainer, rowsCount, currentPage);
setupPagination(listItems, paginationContainer, rowsCount);