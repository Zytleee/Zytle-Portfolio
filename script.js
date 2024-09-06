// Arquivo: js/script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e JavaScript funcionando!");

    // Alternar tema ao clicar no botão
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Verifica se há um tema armazenado no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateButtonTheme(currentTheme); // Atualiza o estilo do botão ao carregar a página
        themeIcon.classList.toggle('fa-sun', currentTheme === 'light-mode');
        themeIcon.classList.toggle('fa-moon', currentTheme === 'dark-mode');
    }

    themeToggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light-mode'); // Salva a configuração no localStorage
            updateButtonTheme('light-mode'); // Atualiza o estilo do botão
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark-mode'); // Salva a configuração no localStorage
            updateButtonTheme('dark-mode'); // Atualiza o estilo do botão
        }
        
        // Adiciona a classe clicked para efeito de borda
        themeToggleButton.classList.add('clicked');
        setTimeout(() => themeToggleButton.classList.remove('clicked'), 300); // Remove a classe após 300ms
        
        // Adiciona a animação ao clicar
        themeToggleButton.classList.add('animate');
        setTimeout(() => themeToggleButton.classList.remove('animate'), 500); // Remove a animação após 500ms
    });

    // Função para atualizar a aparência do botão com base no tema atual
    function updateButtonTheme(theme) {
        if (theme === 'dark-mode') {
            themeToggleButton.classList.add('dark-mode');
        } else {
            themeToggleButton.classList.remove('dark-mode');
        }
    }

    // Alterar o título ao clicar
    document.querySelector('h1').addEventListener('click', function() {
        this.textContent = "o mais louco do mundo!";
    });
});
