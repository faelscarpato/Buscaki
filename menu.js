// menu.js

// Obtém referências para os elementos do menu e do overlay
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const closeSidebarButton = document.querySelector('.close-sidebar');
const body = document.body

// Adiciona event listener para abrir/fechar o menu ao clicar no ícone do menu
menuButton.addEventListener('click', () => {
    if (body.classList.contains('sidebar-open')) {
        body.classList.remove('sidebar-open');
        sidebar.classList.remove('active');
    } else {
        body.classList.add('sidebar-open');
        sidebar.classList.add('active');
    }
});

// Adiciona event listener para fechar o menu ao clicar no botão "X"
closeSidebarButton.addEventListener('click', () => {
    body.classList.remove('sidebar-open');
    sidebar.classList.remove('active');
});


// Adiciona event listener para abrir/fechar o menu ao clicar no ícone do menu
menuButton.addEventListener('click', () => {
    if (body.classList.contains('sidebar-open')) {
        body.classList.remove('sidebar-open');
        sidebar.classList.remove('active');
    } else {
        body.classList.add('sidebar-open');
        sidebar.classList.add('active');
    }
});

// Adiciona event listener para fechar o menu ao clicar no botão "X"
closeSidebarButton.addEventListener('click', () => {
    body.classList.remove('sidebar-open');
    sidebar.classList.remove('active');
});

// Adiciona event listeners para as abas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

