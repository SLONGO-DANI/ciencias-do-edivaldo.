async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);
    const data = [{
        values: quantidadeDeUsuarios,
        labels: nomeDasRedes,
        type: 'pie'
    }];
    const layout = {
        title: {
            text: 'Distribuicao de Usuarios por Rede Social', // Titulo dinamico
            font: {
                size: 20,
                color: '#333' // Cor do texto
            },
            x: 0.5, // Centraliza horizontalmente
            xanchor: 'center', // Ancla o titulo no centro
            yanchor: 'top' // Posiciona o titulo no topo
        },
        height: 400,
        width: 500
    };
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}
quantidadeUsuariosPorRede();
