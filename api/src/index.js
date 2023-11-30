const express = require('express');
const app = express();
const PORT = 4454;
const citiesWeather = require('./weather_cities.json');
const path = require('path');
const cors = require('cors');
const moment = require('moment');

app.use(cors());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

// Routes
// Get all cities
app.get('/forecast', (req, res) => {
  res.send(citiesWeather);
});

// Get specific city by ID
app.get('/cityForecast/:cityId', (req, res) => {
  const foundCity = findCity(req, res);
  res.send(foundCity);
});

function findCity(req, res) {
  const cityId = parseInt(req.params.cityId);
  const foundCity = citiesWeather.find(it => it.id === cityId);
  if (!foundCity) {
    throw res.status(404).send({ errorMessage: `City does not exist` });
  }
  return foundCity;
}


//Get City by Name
app.use('/search/:cityName', (req, res)=>{
  const foundedCityName= findCityName(req, res);
  res.send(foundedCityName);
})

function findCityName(req, res) {
  const cityName = req.params.cityName.toLowerCase(); 
  const cityFound = citiesWeather.find(city => city.city.toLowerCase() === cityName); 
  if (!cityFound) {
    return res.status(404).send({ errorMessage: `This city name does not exist` });
  }
  return res.json(cityFound);
}

//Get cities by specific date
app.get('/cities/:date', (req, res) => {
  const inputDate = req.params.date;
  const parsedDate = moment(inputDate, ['DD-MM-YYYY', 'YYYY-MM-DD'], true);

  if (!parsedDate.isValid()) {
    return res.status(400).send({ errorMessage: 'Invalid date format' });
  }

  const formattedDate = parsedDate.format('YYYY-MM-DD');
  const forecasts = [];

  citiesWeather.forEach(city => {
    const forecast = city.forecast.find(it => it.date === formattedDate);
    if (forecast) {
      forecasts.push({ city: city.city, forecast });
    }
  });

  if (forecasts.length === 0) {
    return res.status(404).send({ errorMessage: 'This City not found for the specified date' });
  }

  res.json(forecasts);
});




//Listening on PORT 4454
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

