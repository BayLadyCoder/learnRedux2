import axios from 'axios';

const API_KEY = '07f832fdd08f39602887402a61d617a7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
const fahrenheit = "&units=imperial";

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url =`${ROOT_URL}&q=${city},us${fahrenheit}`
  const request = axios.get(url);
console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
