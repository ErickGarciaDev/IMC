function calculateIMC() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    if (weight === '' || height === '') {
        alert('Por favor, preencha todos os campos.')
        return;
    }

    let heightInMeters = height / 100;

    const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2)

    displayResult(imc)
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
}

function displayResult(imc) {
    var resultElement = document.getElementById('result')
    resultElement.innerHTML = 'Seu IMC é: ' + imc;

    if (imc < 18.5) {
        resultElement.innerHTML += '<br>Abaixo do peso.'
    } else if (imc >= 18.5 && imc < 24.9) {
        resultElement.innerHTML += '<br>Peso normal.'
    } else if (imc >= 25 && imc < 29.9) {
        resultElement.innerHTML += '<br>Sobrepeso.'
    } else {
        resultElement.innerHTML += '<br>Obesidade.'
    }
}

const button = document.getElementById('button')
button.addEventListener('click', calculateIMC)
