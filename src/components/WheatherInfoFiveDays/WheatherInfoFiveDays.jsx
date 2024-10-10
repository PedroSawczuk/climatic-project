/* eslint-disable react/prop-types */

export function WheatherInfoFiveDays({ weather5Days }) {
    const dailyForecasts = weather5Days.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

    return (
        <div>
            <h2 className="text-zinc-100 py-4 text-2xl">Previsão para os próximos 5 dias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {dailyForecasts.map((forecast, index) => (
                    <div key={index} className="p-4 bg-zinc-800 text-center rounded">
                        <p className="text-lg text-zinc-200">{new Date(forecast.dt_txt).toLocaleDateString('pt-BR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'short',
                        })}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                            alt={forecast.weather[0].description}
                            className="mx-auto"
                        />
                        <p className="text-xl text-white">{Math.round(forecast.main.temp)}ºC</p>
                        <p className="text-zinc-400 capitalize">{forecast.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
