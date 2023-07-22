async function listaVideos(){
    const conexao = await fetch(" http://localhost:3000/videos");
    const conexaoFormatada = await conexao.json();

    return conexaoFormatada;
}

export const conectaApi = {
    listaVideos
}