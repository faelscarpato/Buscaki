const empresas = [
    {
        id: 1,
        nome: "Empresa 1",
        categoria: "Restaurante",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua A, 123",
        status: "Aberta Agora", // ou "Fechada" ou "Fecha em 5 min"
        imagem: "img/empresa1.png",
        detalhes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna.",
        site: "https://www.empresa1.com.br"
    },
    {
        id: 2,
        nome: "Empresa 2",
        categoria: "Mercado",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua B, 456",
        status: "Fechada",
        imagem: "img/empresa2.png",
        detalhes: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
        site: "https://www.empresa2.com.br"
    },
    {
        id: 3,
        nome: "Empresa 3",
        categoria: "Restaurante",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua c, 789",
        status: "Fecha em 5 min",
        imagem: "img/empresa3.png",
        detalhes: "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        site: "https://www.empresa3.com.br"
    },
    {
        id: 4,
        nome: "Empresa 4",
        categoria: "Farmácia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa4.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    },
    {
        id: 5,
        nome: "Empresa 5",
        categoria: "Supermercado",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa5.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    }, {
        id: 6,
        nome: "Empresa 6",
        categoria: "Barbearia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa6.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    }, {
        id: 7,
        nome: "Empresa 7",
        categoria: "Academia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa7.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    }, {
        id: 8,
        nome: "Empresa 8",
        categoria: "Farmácia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa8.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    }, {
        id: 9,
        nome: "Empresa 9",
        categoria: "Farmácia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa9.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    }, {
        id: 10,
        nome: "Empresa 10",
        categoria: "Farmácia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa10.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    }, {
        id: 11,
        nome: "Empresa 11",
        categoria: "Farmácia",
        descricao: "Descrição da empresa",
        telefone: "(11) 99999-9999",
        whatsapp: "(11) 99999-9999",
        endereco: "Rua d, 1011",
        status: "Aberta Agora",
        imagem: "img/empresa11.png",
        detalhes: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. ",
        site: "https://www.empresa4.com.br"
    },
];

const resultsContainer = document.getElementById('results-container');
const searchInput = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.search-bar i');
const menuIcon = document.querySelector('nav .fa-bars');
const menu = document.querySelector('nav ul.menu');
const closeMenuButton = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');
const sortSelect = document.getElementById('sort-select');

const FAVORITOS_KEY = 'favoritos';

function createIcon(classNames, clickHandler) {
    const icon = document.createElement('i');
    icon.className = classNames;
    if (clickHandler) icon.addEventListener('click', clickHandler);
    return icon;
}

// Function to get favoritos from localStorage
function getFavoritos() {
    const favoritos = localStorage.getItem(FAVORITOS_KEY);
    return favoritos ? JSON.parse(favoritos) : [];
}

// Function to create a company card
function createEmpresaCard(empresa) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${empresa.imagem}" alt="${empresa.nome}">
        <div class="info">
            <h2 class="title-card">${empresa.nome}</h2>
            <p class="category">${empresa.categoria}</p>
            <div class="contact"></div>
            <p class="status ${empresa.status.toLowerCase().replace(/\s+/g, '-')}">${empresa.status}</p>
        </div>
        <button class="details" data-id="${empresa.id}">Mais Detalhes</button>
    `;

    const contactDiv = card.querySelector('.contact');
    contactDiv.appendChild(createIcon('fab fa-whatsapp', () => {
        window.open(`https://wa.me/${empresa.whatsapp.replace(/[^\d]/g, '')}`, '_blank');
    }));
    contactDiv.appendChild(createIcon('fas fa-phone', () => {
        window.location.href = `tel:${empresa.telefone}`;
    }));

    if (getFavoritos().includes(empresa.id)) {
        const favoritoIcon = createIcon('fas fa-heart favorito');
        card.querySelector('.info').appendChild(favoritoIcon);
    }

    return card;
}

// Function to render company cards
function renderEmpresas(empresasToRender) {
    resultsContainer.innerHTML = '';
    empresasToRender.forEach(empresa => {
        resultsContainer.appendChild(createEmpresaCard(empresa));
    });

    document.querySelectorAll('.details').forEach(button => {
        button.addEventListener('click', () => {
            const empresaId = button.dataset.id;
            const empresa = empresasToRender.find(e => e.id === parseInt(empresaId));
            openDetailsPage(empresa);
        });
    });
}

// Function to filter companies based on search term
function filterEmpresas(searchTerm) {
    const term = searchTerm.toLowerCase();
    return empresas.filter(({ nome, categoria }) => 
        nome.toLowerCase().includes(term) || categoria.toLowerCase().includes(term)
    );
}

// Function to handle search
function handleSearch() {
    const searchTerm = searchInput.value;
    const filteredEmpresas = filterEmpresas(searchTerm);
    renderEmpresas(filteredEmpresas);
}

// Function to open the details page
function openDetailsPage(empresa) {
    localStorage.setItem('empresaDetails', JSON.stringify(empresa));
    window.location.href = 'detalhes.html';
}

// Function to handle menu visibility
function toggleMenu() {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open', !isOpen);
    overlay.classList.toggle('open', !isOpen);
    menu.style.display = isOpen ? 'none' : 'block';
}

// Function to handle sorting
function handleSort() {
    const sortValue = sortSelect.value;
    let sortedEmpresas = [...empresas];
    
    if (sortValue === 'a-z') {
        sortedEmpresas.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortValue === 'z-a') {
        sortedEmpresas.sort((a, b) => b.nome.localeCompare(a.nome));
    } else if (sortValue === 'mais-proximos') {
        alert('Ordenação por proximidade a ser implementada');
    }

    renderEmpresas(sortedEmpresas);
}

// Initialize event listeners
searchIcon.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', handleSearch);
menuIcon.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
sortSelect.addEventListener('change', handleSort);

// Initialize the display of company cards
renderEmpresas(empresas);
