
function logout() {
    localStorage.setItem('tipoUsuarioLogado', 'none')
    console.log('Deslogado')
    window.location.href = "../html/login.html"
}

function navIds() {
    let tipoUsuario = localStorage.getItem('tipoUsuarioLogado')
    if (tipoUsuario === 'ong') {
        console.log('Logou como ong')
        const userName = document.getElementById('nav-user-name')
        userName.innerHTML = 'Usuário (ONG)'
        const botoes = document.querySelectorAll('.nav-botoes .botao');
        botoes.forEach(botao => {
            const idBase = botao.id;
            botao.id = `${idBase}-${tipoUsuario}`;
            botao.setAttribute("href", `./${botao.id}.html`);
        })

    } else if (tipoUsuario === 'coletor') {
        console.log('Logou como coletor')
        const userName = document.getElementById('nav-user-name')
        userName.innerHTML = 'Usuário (Coletor)'
        const botoes = document.querySelectorAll('.nav-botoes .botao');
        botoes.forEach(botao => {
            const idBase = botao.id;
            botao.id = `${idBase}-${tipoUsuario}`;
            botao.setAttribute("href", `./${botao.id}.html`);
        })
    }
}

function navbarHam() {
    let x = document.getElementById('navbar');
    x.classList.toggle('active')
}

function siteMode() {
    let x = document.getElementById('btn-site-mode')
    let circle = document.getElementById('btn-site-mode-circle')
    let l_icon = document.getElementById('btn-site-mode-circle-light')
    let d_icon = document.getElementById('btn-site-mode-circle-dark')

    const circle_keyframes = [
        {right: '-15px'},
        {right: '65px'}
    ];
    const icon_keyframes = [
        {right: '-5px'},
        {right: '75px'}
    ];
    let options = {duration: 500, direction: 'normal'}
    let circle_style = window.getComputedStyle(circle)
    let circle_right = circle_style.getPropertyValue('right')
    let circle_animation = circle.animate(circle_keyframes, options)

    if (circle_right === '-15px') {
        circle_animation;
        circle.style.right = '65px';
        let icon_ativo = d_icon;
        let icon_animation = icon_ativo.animate(icon_keyframes, options)
        l_icon.style.display = 'none';
        d_icon.style.display = 'flex';
    } else {
        options = {duration: 500, direction: 'reverse'};
        let circle_animation = circle.animate(circle_keyframes, options);
        circle.style.right = '-15px';
        let icon_ativo = l_icon;
        let icon_animation = icon_ativo.animate(icon_keyframes, options)
        l_icon.style.display = 'flex';
        d_icon.style.display = 'none';
    }
    x.classList.toggle('dark')
}

function nomePagina() {
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1).split('.')[0];
    return fileName
}

function localSeleto() {
    console.log('Navbar carregada!')
    const fileName = nomePagina();
    const button = document.getElementById(fileName);
    if (button) {
        button.classList.add('selecionado')
    }
}

function navbarCarregada() {
    navIds();
    localSeleto();
}

document.addEventListener('navbarLoaded', navbarCarregada);

document.getElementById('mensagemexemplo').addEventListener("click", () => {
    let tipoUsuario = localStorage.getItem('tipoUsuarioLogado')
    window.location.href = `vismsg-${tipoUsuario}.html`
})