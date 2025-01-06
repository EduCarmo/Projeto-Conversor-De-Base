const botao = document.getElementById('botao')
const inputNumero = document.getElementById('numero')
const seletorBaseAtual = document.querySelector('#base-atual')
const seletorBaseFinal = document.querySelector('#base-final')
const resultado = document.getElementById('resultado')

botao.addEventListener('click', () => {
    let numeroFinal
    const numeroAtual = +inputNumero.value

    const baseAtual = +seletorBaseAtual.value
    const baseFinal = +seletorBaseFinal.value

    const numeroConvertido = parseInt(numeroAtual, baseAtual)
    numeroFinal = numeroConvertido.toString(baseFinal)

    resultado.classList.remove('invisivel')
    resultado.innerHTML = `
    ${numeroAtual}<sub>${baseAtual}</sub> = ${numeroFinal}<sub>${baseFinal}</sub>
    `
})

