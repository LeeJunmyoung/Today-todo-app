const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = '35c46f02a45d7c2b9b93753afbf78fef';


const getWeather = (lat, lng) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
         .then(response=>{
             return response.json();
         })
         .then(json=>{
             console.log(json);
             const temperture = json.main.temp;
             const place = json.name;
             
             weather.innerText = `${temperture}°C @${place}`;
         });

}

const saveCoords = coordsObj => {
    const jsonCoords = JSON.stringify(coordsObj);
    localStorage.setItem(COORDS, jsonCoords);
}

const handleGeoSuccess = (position) => {
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

const handleGeoError = () => {
    console.log("ERROR");
}

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

const weatherInit = () => {
    loadCoords();
}

weatherInit();