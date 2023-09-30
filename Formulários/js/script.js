import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeIdade from "./valida-idade.js"

const camposDoFormulario = document.querySelectorAll('[required]')

camposDoFormulario.forEach((campo) => {
    campo.addEventListener('blur', () =>verificaCampo(campo))
    campo.addEventListener('invalid', evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

function verificaCampo(campo){
    let mensagem = ''
    campo.setCustomValidity('')
    if (campo.nome == 'cpf' && campo.value.length >= 11){
        ehUmCPF(campo)
    }
    if(campo.name == 'aniversarios' && campo.value != ''){
        ehMaiorDeIdade(campo)
    }
    tiposDeErro.forEach(erro =>{
        if (campo.validity[erro]){
            mensagem = mensagens[campo.name][erro]
            console.log(mensagem)
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem
    }else{
        mensagemErro.textContent = ''
    }
}