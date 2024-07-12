const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#hight').value)
    const weight = parseInt(document.querySelector('#wight').value)
    const results = document.querySelector('#result')


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000).toFixed(2));
        results.innerHTML = `<span>${bmi}</span>`
    };

    const mg = document.querySelector('#mg')
    if (bmi < 18.6) {
        mg.innerHTML = `<span>Under weigth :${bmi}</span>`;
    }
     else if (bmi > 18.6 && bmi < 24.9) {
        mg.textContent = `Normal Weight:${bmi}`;
    }
     else {
        mg.textContent = `Over Weight : ${bmi}`
    };

});