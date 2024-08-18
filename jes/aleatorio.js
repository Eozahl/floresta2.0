const nomes = ["Moacir", "Fernando Lacerda", "Luíz Arnaldo", "José Carlos", "Luíz Rezende", "Kátia Bolsocato", 
    "Murilo", "uma formiga vermelha qualquer", "Freddy Fazbear", "Erondy", "Deus", "Batatinha", "um femboy gladiador", "Meeka"]

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);