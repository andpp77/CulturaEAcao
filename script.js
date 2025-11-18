// Função para exibir a seção clicada no menu
function showSection(sectionId) {
    // 1. Esconde todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Mostra a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Opcional: rola suavemente para o topo da seção
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Garante que a seção 'sobre' seja exibida quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showSection('sobre'); 
});