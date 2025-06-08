function logout() {
    localStorage.setItem('tipoUsuarioLogado', 'none')
    console.log('Deslogado')
    window.location.href = "../index.html"
}

function login() {
    event.preventDefault();
    let userName = document.forms["formLogin"]["nomeUsuario"].value;
    let userPass = document.forms["formLogin"]["senhaUsuario"].value;
    if (userName === 'admin@fortes.com.br' && userPass === '123456') {
        localStorage.setItem('tipoUsuarioLogado', 'coletor')
        let tipoUsuario = localStorage.getItem('tipoUsuarioLogado')
        window.location.href = `../html/dashboard-${tipoUsuario}.html`
    } else if (userName === 'cooperativas@fortes.com.br' && userPass === '123456') {
        localStorage.setItem('tipoUsuarioLogado', 'ong')
        let tipoUsuario = localStorage.getItem('tipoUsuarioLogado')
        window.location.href = `../html/dashboard-${tipoUsuario}.html`
    }
}

function resetUsuarioLogado() {
    localStorage.setItem('tipoUsuarioLogado', 'none')
}

document.addEventListener('DOMContentLoaded', resetUsuarioLogado)