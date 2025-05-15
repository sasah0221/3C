const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    // Se o tempo já passou, retorna 0 para todos
    if (tempoFinal <= 0) {
        return [0, 0, 0, 0];
    }

    // Calcular os dias, horas, minutos e segundos restantes
    let dias = Math.floor(tempoFinal / (1000 * 60 * 60 * 24)); // 1 dia = 1000ms * 60s * 60m * 24h
    let horas = Math.floor((tempoFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
    let minutos = Math.floor((tempoFinal % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
    let segundos = Math.floor((tempoFinal % (1000 * 60)) / 1000); // Segundos restantes

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        let tempoRestante = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = tempoRestante[0];
        document.getElementById("horas" + i).textContent = tempoRestante[1];
        document.getElementById("min" + i).textContent = tempoRestante[2];
        document.getElementById("seg" + i).textContent = tempoRestante[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
