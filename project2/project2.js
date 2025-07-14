const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height';
    }

    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight';
    }
    
    const BMIResult = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${BMIResult}</span>`;

    const container = document.querySelector('.container');

    const div = document.createElement('div');
    div.style.fontSize = '30px';
    div.style.marginTop = '10px';
    
    if(BMIResult === 'NaN'){
        div.innerHTML = 'Invalid BMI Score';
    }
    else if(BMIResult < (18.6)){
        div.innerHTML = 'Under Weight';
    }
    else if(BMIResult > 18.6 && BMIResult < 24.9){
        div.innerHTML = 'Normal Range';
    }
    else div.innerHTML = 'Overweight';

    container.appendChild(div);
});



