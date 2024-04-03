document.getElementById('restartButton').addEventListener('click', function () {
    location.reload();
});

let randomNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 7;
let numBase = 0;
let numPico = 100;
let incognita = "?";

// Añadir las definiciones de inputField y guessButton
const inputField = document.getElementById('guessInput');
const guessButton = document.querySelector('button');

function guessNumber() {
    const userGuess = Number(inputField.value); // Usar la variable inputField aquí
    const resultDisplay = document.getElementById('result');
    const graficaDisplay = document.getElementById('grafica');

    if (userGuess === randomNumber) {
        resultDisplay.innerHTML = `¡Felicidades! ¡Adivinaste el número! <div class="errores"> Intentos restantes: ${intentos}</div>`; // Corregido para mostrar en HTML
        incognita = userGuess;
        inputField.disabled = true; // Desactiva el campo de entrada correctamente
        guessButton.disabled = true; // Desactiva el botón de adivinar correctamente
        guessButton.style.display = 'none'; // Oculta el botón de adivinar
        restartButton.style.display = 'block';
    } else {
        intentos--; // Decrementar el contador de intentos
        if (intentos === 0) {
            // Corregir la interpolación de string aquí para mostrar el número
            resultDisplay.innerHTML = `Game Over. El número era ${randomNumber}.`;
            inputField.disabled = true;
            guessButton.disabled = true;
            guessButton.style.display = 'none'; // Oculta el botón de adivinar
            restartButton.style.display = 'block';
        } else {
            if (userGuess < randomNumber) {
                resultDisplay.innerHTML = `➕ MÁS <div class="errores"> Te quedan: ${intentos} intentos.</div>`;
                numBase = userGuess;
            } else {
                resultDisplay.innerHTML = `➖ MENOS <div class="errores"> Te quedan: ${intentos} intentos.</div>`;
                numPico = userGuess;
            }
        }
    }
    graficaDisplay.innerHTML = `<p style="flex-grow: 1; text-align: left;">${numBase}</p><p style="flex-grow: 1; text-align: center; font-size:2rem;">${incognita}</p><p style="flex-grow: 1; text-align: right;">${numPico}</p>`;

    inputField.value = "";
}
