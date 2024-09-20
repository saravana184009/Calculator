// script.js

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.value === '0' && character !== '.') {
        display.value = character;
    } else {
        display.value += character;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else if (display.value !== '0') {
        display.value = '-' + display.value;
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateSquare() {
    const display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateExponentiation() {
    const display = document.getElementById('display');
    display.value += '**'; // Using '**' to denote exponentiation in JavaScript
}

function calculateSin() {
    const display = document.getElementById('display');
    display.value = Math.sin(parseFloat(display.value) * (Math.PI / 180)); // Converts degrees to radians
}

function calculateCos() {
    const display = document.getElementById('display');
    display.value = Math.cos(parseFloat(display.value) * (Math.PI / 180)); // Converts degrees to radians
}

function calculateTan() {
    const display = document.getElementById('display');
    display.value = Math.tan(parseFloat(display.value) * (Math.PI / 180)); // Converts degrees to radians
}
