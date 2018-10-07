export function urlMaker (url) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${ url }&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
}