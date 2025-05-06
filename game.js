// Переменные для хранения состояния игры
let secretNumber = Math.floor(Math.random() * 100) + 1; // Загаданное число
let player1Name = '';
let player2Name = '';

// Элементы DOM
const message = document.getElementById('message');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const startGameButton = document.getElementById('startGame');
const gameArea = document.getElementById('gameArea');
const currentPlayerTurn = document.getElementById('currentPlayerTurn');
const player1Label = document.getElementById('player1Label');
const player1Input = document.getElementById('player1Input');
const submitPlayer1 = document.getElementById('submitPlayer1');
const player1Turn = document.getElementById('player1Turn');
const player2Label = document.getElementById('player2Label');
const player2Input = document.getElementById('player2Input');
const submitPlayer2 = document.getElementById('submitPlayer2');
const player2Turn = document.getElementById('player2Turn');
const result = document.getElementById('result');
const resultMessage = document.getElementById('resultMessage');
const restartGameButton = document.getElementById('restartGame');

// Обработчик нажатия на кнопку "Начать игру"
startGameButton.addEventListener('click', () => {
    player1Name = player1NameInput.value.trim();
    player2Name = player2NameInput.value.trim();

    // Проверка ввода имён
    if (!player1Name || !player2Name) {
        alert('Введите имена обоих игроков!');
        return;
    }

    // Обновляем интерфейс
    player1Label.textContent = player1Name;
    player2Label.textContent = player2Name;
    currentPlayerTurn.textContent = `Ходит ${player1Name}`;
    gameArea.style.display = 'block';
});

// Обработчик хода первого игрока
submitPlayer1.addEventListener('click', () => {
    const guess = parseInt(player1Input.value);

    // Проверка ввода
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Введите число от 1 до 100!');
        return;
    }

    // Проверяем, угадал ли игрок
    if (guess === secretNumber) {
        resultMessage.textContent = `${player1Name} угадал число ${secretNumber} и победил!`;
        endGame();
        return;
    }

    // Подсказка
    if (guess < secretNumber) {
        alert('Загаданное число больше!');
    } else {
        alert('Загаданное число меньше!');
    }

    // Переходим ко второму игроку
    currentPlayerTurn.textContent = `Ходит ${player2Name}`;
    player1Turn.style.display = 'none';
    player2Turn.style.display = 'block';
});

// Обработчик хода второго игрока
submitPlayer2.addEventListener('click', () => {
    const guess = parseInt(player2Input.value);

    // Проверка ввода
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Введите число от 1 до 100!');
        return;
    }

    // Проверяем, угадал ли игрок
    if (guess === secretNumber) {
        resultMessage.textContent = `${player2Name} угадал число ${secretNumber} и победил!`;
        endGame();
        return;
    }

    // Подсказка
    if (guess < secretNumber) {
        alert('Загаданное число больше!');
    } else {
        alert('Загаданное число меньше!');
    }

    // Переходим к первому игроку
    currentPlayerTurn.textContent = `Ходит ${player1Name}`;
    player2Turn.style.display = 'none';
    player1Turn.style.display = 'block';
});

// Функция для завершения игры
function endGame() {
    gameArea.style.display = 'none';
    result.style.display = 'block';
}

// Обработчик перезапуска игры
restartGameButton.addEventListener('click', () => {
    // Сбрасываем все значения
    secretNumber = Math.floor(Math.random() * 100) + 1;
    player1Name = '';
    player2Name = '';
    player1NameInput.value = '';
    player2NameInput.value = '';
    player1Input.value = '';
    player2Input.value = '';
    currentPlayerTurn.textContent = '';
    gameArea.style.display = 'none';
    player1Turn.style.display = 'block';
    player2Turn.style.display = 'none';
    result.style.display = 'none';
});