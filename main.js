// Seleção dos botões e conteúdos de abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Alterna entre as abas ao clicar nos botões
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remover a classe 'ativo' de todos os botões e conteúdos
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        // Adicionar a classe 'ativo' ao botão e conteúdo clicados
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Definir os tempos de objetivo (em milissegundos)
const tempos = [
    new Date("2023-10-05T00:00:00"),  // Estudar para o Enem
    new Date("2023-12-05T00:00:00"),  // Fazer 4 cursos online
    new Date("2023-12-30T00:00:00"),  // Fazer o Enem
    new Date("2024-02-01T00:00:00")   // Entrar na faculdade
];

// Função para calcular o tempo restante
function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    // Se o tempo passou, retorna zero para todos os valores
    if (tempoFinal <= 0) {
        return [0, 0, 0, 0];
    }

    // Calculando os dias, horas, minutos e segundos restantes
    let dias = Math.floor(tempoFinal / (1000 * 60 * 60 * 24));  // Convertendo para dias
    let horas = Math.floor((tempoFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Restante de horas
    let minutos = Math.floor((tempoFinal % (1000 * 60 * 60)) / (1000 * 60));  // Restante de minutos
    let segundos = Math.floor((tempoFinal % (1000 * 60)) / 1000);  // Restante de segundos

    return [dias, horas, minutos, segundos];
}

// Função para atualizar os cronômetros no DOM
function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        // Calcula o tempo restante para cada objetivo
        const tempoRestante = calculaTempo(tempos[i]);
        
        // Atualiza os valores no HTML usando os IDs dinamicamente
        document.getElementById(`dias${i}`).textContent = tempoRestante[0];
        document.getElementById(`horas${i}`).textContent = tempoRestante[1];
        document.getElementById(`min${i}`).textContent = tempoRestante[2];
        document.getElementById(`seg${i}`).textContent = tempoRestante[3];
    }
}

// Função para iniciar o cronômetro
function comecaCronometro() {
    atualizaCronometro();  // Atualiza uma vez no carregamento
    setInterval(atualizaCronometro, 1000);  // Atualiza a cada segundo
}

// Iniciar o cronômetro quando a página for carregada
comecaCronometro();
