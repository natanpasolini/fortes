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
        window.location.href = '../html/teste.html'
    } else if (userName === 'cooperativas@fortes.com.br' && userPass === '123456') {
        localStorage.setItem('tipoUsuarioLogado', 'ong')
        window.location.href = '../html/teste.html'
    }
}

function resetUsuarioLogado() {
    localStorage.setItem('tipoUsuarioLogado', 'none')
}

document.addEventListener('DOMContentLoaded', resetUsuarioLogado)