const inputDays = document.querySelector('.days'),
inputCity = document.querySelector('.city'),
btnRun = document.querySelector('.btn'),
outputted = document.querySelector('.outputted');


    inputDays.addEventListener('change', () => {
        localStorage.setItem("inputDays", inputDays.value)
    });

    inputCity.addEventListener('change', () => {
        localStorage.setItem("inputCity", inputCity.value)
    });

    btnRun.addEventListener('click', () => {

        const days = localStorage.getItem('inputDays');
        const city = localStorage.getItem('inputCity');


        const url = 'https://api.m3o.com/v1/weather/Forecast';
        fetch (url + `?days=${days}&location=${city}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer NWZlYzNjNTEtZjYyOC00YzZjLTk4MzYtYTk3ZTlkNWVkMDA1"
        }
        })
        .then (resp => resp.json())
        .then (JSON.stringify)
        .then (function(data){
            outputted.innerHTML = data ;
        })
        .catch (function(error) {
            outputted.innerHTML = error;
        })
        });