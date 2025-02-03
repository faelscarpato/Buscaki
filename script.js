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

// Função para criar um card de empresa
function createEmpresaCard(empresa) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${empresa.imagem}" alt="${empresa.nome}">
        <div class="info">
            <h2 class="title-card">${empresa.nome}</h2>
            <p class="category">${empresa.categoria}</p>
            <div class="contact">
                <i class="fab fa-whatsapp"></i>
                <i class="fas fa-phone"></i>
            </div>
            <p class="status ${empresa.status.toLowerCase().replace(/\s+/g, '-')}">${empresa.status}</p>
        </div>
        <button class="details" data-id="${empresa.id}">Mais Detalhes</button>
    `;

    // Adiciona um indicador visual se a empresa é favorita
    const favoritos = getFavoritos();
    if (favoritos.includes(empresa.id)) {
        const favoritoIcon = document.createElement('i');
        favoritoIcon.classList.add('fas', 'fa-heart', 'favorito');
        card.querySelector('.info').appendChild(favoritoIcon);
    }

    const whatsappIcon = card.querySelector('.fa-whatsapp');
    whatsappIcon.addEventListener('click', () => {
        window.open(`https://wa.me/${empresa.whatsapp.replace(/[^\d]/g, '')}`, '_blank');
    });

    const phoneIcon = card.querySelector('.fa-phone');
    phoneIcon.addEventListener('click', () => {
        window.location.href = `tel:${empresa.telefone}`;
    });

    return card;
}

// Função para renderizar os cards na tela
function renderEmpresas(empresasToRender) {
    resultsContainer.innerHTML = '';
    empresasToRender.forEach(empresa => {
        resultsContainer.appendChild(createEmpresaCard(empresa));
    });

    // Adiciona event listeners aos botões "Mais Detalhes"
    const detailsButtons = document.querySelectorAll('.details');
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const empresaId = button.dataset.id;
            const empresa = empresasToRender.find(e => e.id === parseInt(empresaId));
            openDetailsPage(empresa);
        });
    });
}

// Função para filtrar empresas com base no termo de pesquisa
function filterEmpresas(searchTerm) {
    return empresas.filter(empresa => {
        const nome = empresa.nome.toLowerCase();
        const categoria = empresa.categoria.toLowerCase();
        const term = searchTerm.toLowerCase();
        return nome.includes(term) || categoria.includes(term);
    });
}

//função de pesquisa
function handleSearch() {
    const searchTerm = searchInput.value;
    const filteredEmpresas = filterEmpresas(searchTerm);
    renderEmpresas(filteredEmpresas);
}

// Função para obter a lista de favoritos do localStorage (igual à do script-detalhes.js)
function getFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

// Função para abrir a página de detalhes
function openDetailsPage(empresa) {
    localStorage.setItem('empresaDetails', JSON.stringify(empresa));
    window.location.href = 'detalhes.html';
}

// Inicializa a exibição dos cards
renderEmpresas(empresas); // Usando a variável 'empresas' importada

// Event Listeners

//faz a pesquisa onclick
searchIcon.addEventListener('click', handleSearch);
//faz a pesquisa onkeyup
searchInput.addEventListener('keyup', handleSearch);



// Adiciona event listener para o menu hambúrguer
menuIcon.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        menu.style.display = 'none'; // Certifica-se de que o menu está oculto
    } else {
        menu.classList.add('open');
        overlay.classList.add('open');
        menu.style.display = 'block'; // Certifica-se de que o menu está visível
    }
});

// Adiciona event listener para fechar o menu ao clicar no botão "X"
closeMenuButton.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
});

// Adiciona event listener para fechar o menu ao clicar fora (no overlay)
overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
});

// Adiciona event listeners para a ordenação
sortSelect.addEventListener('change', () => {
    const sortValue = sortSelect.value;
    let sortedEmpresas = [...empresas]; // Cria uma cópia do array original
    
    if (sortValue === 'a-z') {
        sortedEmpresas.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortValue === 'z-a') {
        sortedEmpresas.sort((a, b) => b.nome.localeCompare(a.nome));
    } else if (sortValue === 'mais-proximos') {
        // Implementar lógica de ordenação por proximidade (precisa de geolocalização)
        alert('Ordenação por proximidade a ser implementada');
    }

    renderEmpresas(sortedEmpresas);
});

// Função para filtrar empresas com base no termo de pesquisa
function filterEmpresas(searchTerm) {
    return empresas.filter(empresa => {
        const nome = empresa.nome.toLowerCase();
        const categoria = empresa.categoria.toLowerCase();
        const term = searchTerm.toLowerCase();
        return nome.includes(term) || categoria.includes(term);
    });
}

function filterEmpresas(searchTerm) {
    return empresas.filter(empresa => {
        const nome = empresa.nome.toLowerCase();
        const categoria = empresa.categoria.toLowerCase();
        const term = searchTerm.toLowerCase();
        return nome.includes(term) || categoria.includes(term);
    });
}

// Função para filtrar empresas por categoria
function filterByCategory(category) {
    const filteredEmpresas = empresas.filter(empresa => {
        return empresa.categoria.toLowerCase() === category.toLowerCase();
    });
    renderEmpresas(filteredEmpresas);
    showMain('app-list');
}

//função de pesquisa
function handleSearch() {
    const searchTerm = searchInput.value;
    const filteredEmpresas = filterEmpresas(searchTerm);
    renderEmpresas(filteredEmpresas);
}

// Função para obter a lista de favoritos do localStorage (igual à do script-detalhes.js)
function getFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

// Função para abrir a página de detalhes
function openDetailsPage(empresa) {
    localStorage.setItem('empresaDetails', JSON.stringify(empresa));
    window.location.href = 'detalhes.html';
}

// Função para exibir a div (main) correta
function showMain(mainId) {
    const mains = ['app-home', 'app-list', 'app-detail'];
    mains.forEach(id => {
        const main = document.getElementById(id);
        if (id === mainId) {
            main.classList.remove('hidden');
        } else {
            main.classList.add('hidden');
        }
    });
}

//faz a pesquisa onclick
searchIcon.addEventListener('click', handleSearch);
//faz a pesquisa onkeyup
searchInput.addEventListener('keyup', handleSearch);

// Adiciona event listeners para a ordenação
sortSelect.addEventListener('change', () => {
    const sortValue = sortSelect.value;
    let sortedEmpresas = [...empresas]; // Cria uma cópia do array original
    
    if (sortValue === 'a-z') {
        sortedEmpresas.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortValue === 'z-a') {
        sortedEmpresas.sort((a, b) => b.nome.localeCompare(a.nome));
    } else if (sortValue === 'mais-proximos') {
        // Implementar lógica de ordenação por proximidade (precisa de geolocalização)
        alert('Ordenação por proximidade a ser implementada');
    }

    renderEmpresas(sortedEmpresas);
});

// Adiciona event listeners para as categorias após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.querySelector('.category-name').textContent;
            filterByCategory(category);
        });
    });
});
// Inicializa a exibição dos cards, mas não renderiza inicialmente
// renderEmpresas(empresas); // Removido para evitar exibir empresas na tela inicial

// Mostra a tela inicial por padrão
showMain('app-home');