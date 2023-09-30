export default function ehMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value)
    if (!validaIdade){
        campo.setCustomValidity('O usuário não é maior de idade')
    }
} 

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCFullMonth(), data.getUTCFullDate())

    return dataAtual >= dataMais18
}