document.getElementById("infoSubmit").addEventListener("click", function() {
  event.preventDefault();
  const country = document.getElementById("countryInput").value;
  const year = document.getElementById("yearInput").value;
  if (country === "" || year === "") {
    return;
  }
  console.log(country, year);

  const url = "https://calendarific.com/api/v2/holidays?&api_key=e069e1ef4c4364d41bbbccd6e16605ab75cdf29c&country=" + country + "&year=" + year;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
        results += '<h2>Holidays in ' + json.response.holidays[0].country.name + ' in ' + json.response.holidays[0].date.datetime.year + "</h2>";
        for (let i=0; i < json.response.holidays.length; i++) {
          results += '<br/>'
          results += '<p> Date: ' + json.response.holidays[i].date.iso + " </p>"
          results += '<p> Name: ' + json.response.holidays[i].name + " </p>"
          results += '<p> Description: ' + json.response.holidays[i].description + " </p>"
          results += '<p> Type: ' + json.response.holidays[i].type[0] + " </p>"
          results += '<br/>'
        }
        results += "</p>";
        document.getElementById("holidayResults").innerHTML = results;
    });
});

/*
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b6bf5302202553106fe5094dbd31fcb9";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
        results += '<h2>Weather in ' + json.name + "</h2>";
        results += '<p>Longitude: ' + json.coord.lon + ',\tLatitude: ' +json.coord.lat + "</p>";
        for (let i=0; i < json.weather.length; i++) {
        	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<p> Temperature: ' + json.main.temp + " &deg;F</h3>"
        results += '<p> Feels Like: ' + json.main.feels_like + " &deg;F</p>"
        results += '<p> Minimum Temp: ' + json.main.temp_min + " &deg;F<p>"
        results += '<p> Maximum Temp: ' + json.main.temp_max + " &deg;F</p>"
        results += '<p> Pressure: ' + json.main.pressure + " Pa</p>"
        results += '<p> Humidity: ' + json.main.humidity + " %</p>"
        results += '<p> Wind Speed: ' + json.wind.speed + "</p>"
        results += '<p> Wind Degree: ' + json.wind.deg + "&deg</p>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
        	results += json.weather[i].description
        	if (i !== json.weather.length - 1)
        	  results += ", "
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
    });

  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=b6bf5302202553106fe5094dbd31fcb9";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
      	forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
      	forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += '<p> Feels Like: ' + json.list[i].main.feels_like + " &deg;F</p>"
        forecast += '<p> Minimum Temp: ' + json.list[i].main.temp_min + " &deg;F</p>"
        forecast += '<p> Maximum Temp: ' + json.list[i].main.temp_max + " &deg;F</p>"
        forecast += '<p> Pressure: ' + json.list[i].main.pressure + " Pa</p>"
        forecast += '<p> Humidity: ' + json.list[i].main.humidity + " %</p>"
        forecast += '<p> Wind Speed: ' + json.list[i].wind.speed + "</p>"
        forecast += '<p> Wind Degree: ' + json.list[i].wind.deg + "&deg</p>"
      	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});*/
