function paraCadastro(tipo) {
    localStorage.setItem('tipoRegistro', tipo)
    window.location.href = '../html/registro.html'
}

function definirCadastro() {
    console.log('rodando definirCadastro')
    if (window.location.pathname.includes('registro')) {
        console.log('pagina reconhecida')
        let tipo = localStorage.getItem('tipoRegistro')
        let tituloCadastro = document.getElementById('titulo-cadastro')
        tituloCadastro.innerHTML = `Cadastro de ${tipo}`
        if (tipo === 'Coletor') {
            let cnpj = document.getElementById('registro-cnpj')
            cnpj.setAttribute('placeholder', 'CPF ou CNPJ')
        }
    } else {
        localStorage.setItem('tipoRegistro', 'none')
    }
}

document.addEventListener('DOMContentLoaded', definirCadastro)