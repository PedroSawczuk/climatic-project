

export function WeatherInfo({ weather }) {
    console.log(weather);

    return (
        <>
            <h2>{weather.name}</h2>
            
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                <p>{Math.round(weather.main.temp)}</p>
            </div>
            <div>
                <p>{weather.weather[0].description}</p>
            </div>

            <div>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {Math.round(weather.main.humidity)}%</p>
                <p>Pressão: {Math.round(weather.main.pressure)}</p>
            </div>

        </>
    );
}
