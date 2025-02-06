// ----------------------------------------------------------------------
// Importações e Variáveis Globais
// ----------------------------------------------------------------------

// Obtém os parâmetros da URL (para pegar o ID da empresa)
const urlParams = new URLSearchParams(window.location.search);
const empresaId = parseInt(urlParams.get('id'));

// Recupera os dados da empresa do localStorage
const empresa = JSON.parse(localStorage.getItem('empresaDetails'));

// Obtém a referência para o elemento onde os detalhes da empresa serão exibidos
const empresaDetalhes = document.getElementById('empresa-detalhes');

// Chave da API do Mapbox (substitua com a sua chave real)
const mapboxApiKey = 'pk.eyJ1Ijoic2NhcnBhdG9kZXNpZ25lciIsImEiOiJjbTZrcGZwaHIwMGtnMmtweHBmZmg2cGp4In0.TPQPgDDL6_p7Qv6iJtOCig';

// ----------------------------------------------------------------------
// Funções de Criação de Elementos da Página de Detalhes
// ----------------------------------------------------------------------

// Função para criar a seção de informações da empresa
function createInfoSection(empresa) {
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="top-info">
            <img src="${empresa.imagem}" alt="${empresa.nome}">
        </div>
        <h2 class="title">${empresa.nome}</h2>
    `;
    return section;
}

// Função para criar a seção de botões de ação
function createActionButtons(empresa) {
    const section = document.createElement('section');
    section.classList.add('actions');
    section.innerHTML = `
        <button id="rota"><i class="fas fa-map-marker-alt"></i> Rotas</button>
        <button id="salvar"><i class="fas fa-save"></i> Salvar</button>
        <button id="compartilhar"><i class="fas fa-share-alt"></i> Compartilhar</button>
        <button id="ligar"><i class="fas fa-phone"></i> Ligar</button>
        <button id="whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</button>
    `;

    // Botão de Rota
    const rotaButton = section.querySelector('#rota');
    rotaButton.addEventListener('click', () => {
        if (empresa.endereco) {
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(empresa.endereco)}`, '_blank');
        } else {
            alert('Endereço não disponível para esta empresa.');
        }
    });

    // Botão de Salvar
    const salvarButton = section.querySelector('#salvar');
    salvarButton.addEventListener('click', () => {
        toggleFavorito(empresa.id);
        updateSalvarButton(salvarButton, empresa.id);
    });

    // Botão de Compartilhar
    const compartilharButton = section.querySelector('#compartilhar');
    compartilharButton.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: empresa.nome,
                text: `Confira ${empresa.nome} no BuscAKI:`,
                url: window.location.href,
            })
                .then(() => console.log('Compartilhamento bem-sucedido'))
                .catch((error) => console.log('Erro ao compartilhar', error));
        } else {
            alert('Compartilhamento não suportado neste navegador.');
        }
    });

    // Botão de Ligar
    const ligarButton = section.querySelector('#ligar');
    ligarButton.addEventListener('click', () => {
        if (empresa.telefone) {
            window.location.href = `tel:${empresa.telefone}`;
        } else {
            alert('Número de telefone não disponível para esta empresa.');
        }
    });

    // Botão do WhatsApp
    const whatsappButton = section.querySelector('#whatsapp');
    whatsappButton.addEventListener('click', () => {
        if (empresa.whatsapp) {
            window.open(`https://wa.me/${empresa.whatsapp.replace(/[^\d]/g, '')}`, '_blank');
        } else {
            alert('WhatsApp não disponível para esta empresa.');
        }
    });

    // Atualiza o botão Salvar (para caso a empresa já seja favorita)
    updateSalvarButton(salvarButton, empresa.id);

    return section;
}

// Função para criar a seção de abas
function createTabsSection() {
    const section = document.createElement('section');
    section.classList.add('tabs');
    section.innerHTML = `
        <button data-target="visao-geral" class="active">Visão Geral</button>
        <button data-target="avaliacoes">Avaliações</button>
        <button data-target="sobre">Sobre</button>
    `;
    return section;
}

// Função para criar a seção de conteúdo das abas
function createTabContent(empresa) {
    const section = document.createElement('section');
    section.classList.add('tab-content');
    section.innerHTML = `
        <div id="visao-geral" class="hidden">
            <div class="info-list">
                <p class="status ${empresa.status.toLowerCase().replace(/\s+/g, '-')}">${empresa.status}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${empresa.endereco}</p>
                <p><i class="far fa-clock"></i> Aberto - Fecha às 18:00 <i class="fas fa-chevron-down"></i></p>
                ${empresa.site ? `<p><a href="${empresa.site}"><i class="fas fa-globe"></i> ${empresa.site}</a></p>` : ''}
                <p><i class="fas fa-phone"></i> ${empresa.telefone}</p>
            </div>
            <div id="map"></div>
        </div>
        <div id="avaliacoes" class="hidden">
            (Avaliações)
        </div>
        <div id="sobre" class="hidden">
            (Sobre)
        </div>
    `;

    // Mostra a aba "Visão Geral" por padrão
    section.querySelector("#visao-geral").classList.remove('hidden');

    return section;
}

// ----------------------------------------------------------------------
// Funções de Interação com a Página
// ----------------------------------------------------------------------

// Função para configurar o mapa (AGORA USANDO MAPBOX GL JS)
function setupMap(empresa) {
    if (!empresa.lat || !empresa.lng) {
        console.warn('Coordenadas (latitude e longitude) não disponíveis para a empresa:', empresa.nome);
        document.getElementById('map').innerHTML = '<p>Mapa não disponível devido à falta de coordenadas.</p>';
        return;
    }

    mapboxgl.accessToken = mapboxApiKey; // Define o token de acesso do Mapbox

    const map = new mapboxgl.Map({
        container: 'map', // ID do container do mapa
        style: 'mapbox://styles/mapbox/streets-v12', // Estilo do mapa (pode ser alterado)
        center: [empresa.lng, empresa.lat], // [longitude, latitude]
        zoom: 15 // Nível de zoom inicial
    });

    // Adiciona um marcador no mapa
    new mapboxgl.Marker()
        .setLngLat([empresa.lng, empresa.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // offset the popup
            .setHTML(`<h3>${empresa.nome}</h3><p>${empresa.endereco}</p>`))
        .addTo(map);
}

// Função para mostrar o conteúdo da aba selecionada
function showTabContent(tabName) {
    const tabContents = document.querySelectorAll('.tab-content > div');
    tabContents.forEach(content => {
        if (content.id === tabName) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

// Função para configurar o clique nas abas
function setupTabClicks() {
    const tabs = document.querySelectorAll('.tabs button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove a classe 'active' de todas as abas
            tabs.forEach(t => t.classList.remove('active'));
            // Adiciona a classe 'active' à aba clicada
            tab.classList.add('active');
            // Mostra o conteúdo da aba correspondente
            showTabContent(tab.dataset.target);
        });
    });
}

// ----------------------------------------------------------------------
// Funções de Manipulação de Favoritos
// ----------------------------------------------------------------------

// Função para adicionar ou remover uma empresa dos favoritos
function toggleFavorito(empresaId) {
    let favoritos = getFavoritos();
    const index = favoritos.indexOf(empresaId);
    if (index > -1) {
        favoritos.splice(index, 1); // Remove se já for favorito
    } else {
        favoritos.push(empresaId); // Adiciona se não for favorito
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Função para obter a lista de favoritos do localStorage
function getFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

// Função para atualizar o ícone e a funcionalidade do botão Salvar
function updateSalvarButton(button, empresaId) {
    const favoritos = getFavoritos();
    const isFavorito = favoritos.includes(empresaId);

    if (isFavorito) {
        button.innerHTML = '<i class="fas fa-heart"></i> Salvo';
        button.classList.add('salvo'); // Adiciona uma classe para estilizar o botão de favorito
    } else {
        button.innerHTML = '<i class="fas fa-save"></i> Salvar';
        button.classList.remove('salvo'); // Remove a classe se não for favorito
    }
}

// ----------------------------------------------------------------------
// Inicialização da Página


// ----------------------------------------------------------------------

// Verifica se a empresa foi encontrada
if (empresa) {
    const infoSection = createInfoSection(empresa);
    const actionsSection = createActionButtons(empresa);
    const tabsSection = createTabsSection();
    const tabContentSection = createTabContent(empresa);

    // Monta a página de detalhes
    empresaDetalhes.appendChild(infoSection);
    empresaDetalhes.appendChild(actionsSection);
    empresaDetalhes.appendChild(tabsSection);
    empresaDetalhes.appendChild(tabContentSection);

    // Configura o mapa e os cliques nas abas
    setupMap(empresa);
    setupTabClicks();
} else {
    console.error('Empresa não encontrada');
    empresaDetalhes.innerHTML = '<p>Empresa não encontrada.</p>';
}


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

// script-detalhes.js

// ... (seu código atual) ...

// Função para voltar para a página anterior
function goBack() {
    history.back();
}

// Cria o botão "Voltar"
const backButton = document.createElement('button');
backButton.id = 'back-button'; 
backButton.textContent = 'Voltar';

// Adiciona um event listener ao botão "Voltar"
backButton.addEventListener('click', goBack);

empresaDetalhes.insertBefore(backButton, infoSection); // Adiciona o botão antes do infoSection

