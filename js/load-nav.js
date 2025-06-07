fetch('../navbar.html')
    .then(response => response.text())
    .then(htmlDaNavbar => {
        const placeholder = document.getElementById('navbar-placeholder');
        placeholder.innerHTML = htmlDaNavbar;
        const eventoNavbarCarregada = new Event('navbarLoaded');
        document.dispatchEvent(eventoNavbarCarregada);
    });