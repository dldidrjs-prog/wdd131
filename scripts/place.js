document.querySelector('#lastModified').textContent = "Last Modification: " + document.lastModified;

const temperature = 10;
const windSpeed = 1;

function Windchill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = Windchill(temperature, windSpeed).toFixed(1) + " °C";
}

document.querySelector("#windChill").textContent = windChill;