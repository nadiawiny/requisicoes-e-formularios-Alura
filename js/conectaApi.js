// Requisição GET

async function listaVideos(){
    const conexao =await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

// foi criada toda estrutura de uma função assincrona que faz uma conexao com a API e cria uma requisição POST - cadastrar novas coisas na API 

async function criaVideo(titulo, descricao, url, imagem){ // para declarar outros tipos de requisições 
    const conexao = await fetch('Http://localhost: 300/videos', {
        method: "POST", 
        headers: {
            'Content-type': 'application/json' // o Content-type serve para especificar que tipo de arquivo está sendo enviado ou recebido
        },
        body: JSON.stringify({  // vamos enviar o dados que a gente quer cadastrar nessa requisição
            titulo: titulo, 
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o video")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}