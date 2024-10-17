function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const result = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return `${result.toFixed(1)} °C`
    }
    return "N/A";
}

const windchillElement = document.querySelector("#windchill");
windchillElement.innerText = calculateWindChill(10, 5)