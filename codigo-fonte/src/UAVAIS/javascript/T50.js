function alcarVoo() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="" alt="Drone decolando" style="position: absolute; display: block; margin: 0 auto; top: 90%; left: 30%;">
        <section class="paragrafo"> <p class= "text"> O DJI Agras T50 é um drone especializado para aplicações agrícolas, projetado para pulverização eficiente e monitoramento de cultivos. Aqui estão os principais pontos sobre o DJI Agras T50:<br>
Capacidade de Carga:
Pode transportar até 50 litros de líquido, como pesticidas ou fertilizantes, em um único voo.<br>
Eficiência de Pulverização:
Utiliza um sistema de pulverização inteligente que ajusta a taxa de aplicação conforme necessário, otimizando o uso de produtos agrícolas.</p></section>
    `;
}

function aterrissarDrone() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="drone-aterrissando.jpg" alt="Drone aterrissando" style="position: absolute; bottom: 10px; top: 90%; left: 70%;">
        <section class="paragrafo"><p class="text">Integração e Monitoramento:<br>
Integra-se com sistemas de gestão agrícola para monitoramento em tempo real e análise de dados, ajudando os agricultores a tomar decisões informadas.<br>

O DJI Agras T50 é uma ferramenta avançada que visa melhorar a eficiência e a precisão das práticas agrícolas, reduzindo o desperdício e maximizando os resultados das culturas.</p> </section>
    `;
}

function moverDireita() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="drone-direita.jpg" alt="Drone voando para a direita" style="position: absolute; float: right; top: 10%; left: 80%;">
       <section class="paragrafo"> <p class="text">Autonomia:<br>
Oferece uma autonomia de voo de até 22 minutos, permitindo cobrir áreas consideráveis em cada operação.<br>

Velocidade Máxima:<br>
Alcança uma velocidade máxima de cerca de 7 metros por segundo (25 km/h), adequada para operações agrícolas eficientes.</p> </section>
    `;
}

function moverEsquerda() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="drone-esquerda.jpg" alt="Drone voando para a esquerda" style="position: absolute; float: top: 10%; left: 10%;">
        <section class="paragrafo"><p class="text">Sistema de Navegação e Segurança:<br>
Equipado com sistemas de posicionamento GNSS (GPS e GLONASS) e sensores de visão para navegação precisa e segura.<br>

Controle Remoto e Software de Planejamento:<br>
Controlado remotamente por meio de software dedicado que permite o planejamento detalhado das missões de voo, incluindo rotas e áreas de aplicação.
Integração e Monitoramento:</p></section>
    `;
}
