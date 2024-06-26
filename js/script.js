const inputButton = document.getElementById('container-button');

// * Function untuk mengconvert nilai pada input (Celsius to Fahrenheit) dan validation input*\\
function convert() {
    let celsiusInput = parseFloat(document.getElementById('input-celsius').value);

    if (!isNaN(celsiusInput)) {
        let fahrenheitOutput = celsiusInput * 1.8 + 32;
        let solution = celsiusInput + '°C * (9 / 5) + 32 = ' + fahrenheitOutput + '°F';

        document.getElementById('result').textContent = fahrenheitOutput;
        document.getElementById('method-output').textContent = solution;
    } else {
        
        document.getElementById('result').textContent = '';
        document.getElementById('method-output').textContent = '';
    }
    return false; 
}

// * Function untuk mengosongkan textarea ketika tombol reset ditekan*\\
function reset() {
    document.getElementById('input-celsius').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('method-output').textContent = '';
}

// * Function untuk mendirect ke page lain nya*\\
function reverse() {
    window.location.href = 'F-to-C.html';
}


//* Fahrenheit to Celsius//

// * Function untuk mengconvert nilai pada input (Fahrenheit to Celsius) dan validation input*\\
function convertFahrenheit() {
    let fahrenheitInput = parseFloat(document.getElementById('input-fahrenheit').value); 

    if (!isNaN(fahrenheitInput)) {
        let celsiusOutput = (fahrenheitInput - 32) * 5/9;
        let solution = '('+fahrenheitInput + '°F - 32) * (5 / 9) = ' + celsiusOutput.toFixed(2) + '°C';

        document.getElementById('result-fahrenheit').innerText = celsiusOutput.toFixed(2);
        document.getElementById('method-output').innerText = solution;
    } else {
        document.getElementById('result-fahrenheit').innerText = '';
        document.getElementById('method-output').innerText = '';
    }
    return false; 
}

function resetFahrenheit() {
    document.getElementById('input-fahrenheit').value = '';
    document.getElementById('result-fahrenheit').innerText = '';
    document.getElementById('method-output').innerText = '';
}

function reverseFahrenheit() {
    window.location.href = 'index.html';
}
