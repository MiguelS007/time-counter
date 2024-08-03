/*var number = 5

var secondNumber = 10

var result = number + secondNumber

console.log(`A soma de ${number} e ${secondNumber} é igual a ${result}`)
*/

// Variáveis para armazenar o tempo e o intervalo
let startTime, updatedTime, difference, tInterval;
let running = false;
let elapsedTime = 0;

// Referências para elementos HTML
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Função para formatar o tempo em HH:MM:SS
function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return [hours, minutes, seconds].map(num => num.toString().padStart(2, '0')).join(':');
}

// Função para atualizar o display do cronômetro
function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime + elapsedTime;
    display.innerHTML = formatTime(difference);
}

// Função para iniciar o cronômetro
function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateDisplay, 1000);
        running = true;
    }
}

// Função para parar o cronômetro
function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        elapsedTime += new Date().getTime() - startTime;
        running = false;
    }
}

// Função para zerar o cronômetro
function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = '00:00:00';
    elapsedTime = 0;
    running = false;
}

// Adiciona eventos aos botões
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);