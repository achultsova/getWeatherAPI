const url = 'https://api.m3o.com/v1/weather/Forecast';
fetch (url + `?days=2&location=London`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer NWZlYzNjNTEtZjYyOC00YzZjLTk4MzYtYTk3ZTlkNWVkMDA1"
      }
    })
    .then (resp => resp.json())
    .then (function(data){
        console.log(data);
    })
    .catch (function(error) {
        console.log(error);
    })