document.addEventListener('DOMContentLoaded', () => {
    let paginaAtual = window.location.pathname.split('/').pop().replace('.html', '').split('-')[0];
        const tipoUsuario = localStorage.getItem('tipoUsuarioLogado');
        if (tipoUsuario === 'ong' && !window.location.pathname.includes(`ong`)) {
            window.location.href = `./${paginaAtual}-ong.html`;
        } else if (tipoUsuario === 'coletor' && !window.location.pathname.includes(`coletor`)) {
            window.location.href = `./${paginaAtual}-coletor.html`;
        }
});