import { getCSS } from "./common.js"

async function quantidedeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json&#39';
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys (dados)
    const quantidedeUsuarios = Object.values(dados)
    const data = [
        { x: nomeDasRedes,
            y: quantidaDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color--')
            }}]
    const layout  = {
        plot_bgcolor: getCSS('--bg-color--'),
        paper_bgcolor: getCSS('--bg-color--') }
        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('grafico-container').appendChild(grafico)
        Plotly.newPlot(grafico, data, layout) }
quantidedeUsuariosPorRede()
