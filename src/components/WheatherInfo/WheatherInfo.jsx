/* eslint-disable react/prop-types */


export function WeatherInfo({ weather }) {
    console.log(weather);

    return (
        <>
            <h2 className="text-zinc-100 py-2 text-2xl">{weather.name}</h2>

            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} className="size-20" alt="" />
                <p className="text-2xl text-zinc-50">{Math.round(weather.main.temp)}ºC</p>
            </div>
            <div className="text-center">
                <p className="text-zinc-50 py-2 text-xl">Situaçao:</p>
                <p className="text-zinc-50 text-2xl capitalize">{weather.weather[0].description}</p>
                <p className="p-2 text-zinc-500">-----------------------------------------------------------------</p>
            </div>

            <hr />

            <div className="text-center gap-2">
                <p className="text-zinc-50 py-2 text-xl">Sensação Térmica: </p>
                <p className="text-zinc-50 text-2xl">{Math.round(weather.main.feels_like)}ºC</p>
                <p className="p-2 text-zinc-500">-----------------------------------------------------------------</p>
                <p className="text-zinc-50 py-2 text-xl">Umidade:</p>
                <p className="text-zinc-50 text-2xl">{Math.round(weather.main.humidity)}%</p>
                <p className="p-2 text-zinc-500">-----------------------------------------------------------------</p>
                <p className="text-zinc-50 py-2 text-xl">Pressão:</p>
                <p className="text-zinc-50 text-2xl">{Math.round(weather.main.pressure)}</p>
                <p className="p-2 text-zinc-500">-----------------------------------------------------------------</p>
            </div>

        </>
    );
}
