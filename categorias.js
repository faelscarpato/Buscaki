

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
