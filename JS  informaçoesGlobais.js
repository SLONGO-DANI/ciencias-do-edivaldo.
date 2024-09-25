const url = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap'

async function vizualizadorInformacoesglobais () {
    const res = await fetch(url)
    const dados= await res.json()
    console.log(dados);
    const paragrafo =document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML = 'Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectaddas em alguma rede social e passam em média ${dados.tempo_médio} horas conectadas.'
    console.log(paragrafo)
    
    const container = document.getElementById('graficos-cpntainer')
    container.appendChild(paragrafo)
}

vizualizadorInformacoesglobais()
