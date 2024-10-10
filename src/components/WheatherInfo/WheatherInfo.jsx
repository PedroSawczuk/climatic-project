/* eslint-disable react/prop-types */
export function WeatherInfo({ weather }) {
    return (
        <>
            <h2 className="text-white py-2 text-3xl font-semibold">{weather.name}</h2>

            <div className="flex flex-col items-center">
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    className="w-20 h-20"
                    alt={`${weather.weather[0].description}`}
                />
                <p className="text-3xl text-white font-bold mt-2">{Math.round(weather.main.temp)}ºC</p>
            </div>

            <div className="text-center mt-4">
                <p className="text-lg text-gray-300">Situação</p>
                <p className="text-2xl text-white capitalize font-medium">{weather.weather[0].description}</p>
            </div>


            <div className="grid mt-4 grid-cols-1 gap-4 text-center">
                <div>
                    <p className="text-lg text-gray-300">Sensação Térmica</p>
                    <p className="text-2xl text-white font-medium">{Math.round(weather.main.feels_like)}ºC</p>
                </div>
                <div>
                    <p className="text-lg text-gray-300">Umidade</p>
                    <p className="text-2xl text-white font-medium">{weather.main.humidity}%</p>
                </div>
                <div>
                    <p className="text-lg text-gray-300">Pressão</p>
                    <p className="text-2xl text-white font-medium">{weather.main.pressure} hPa</p>
                </div>
            </div>
        </>
    );
}
