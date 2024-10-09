import axios from "axios";
import { useRef, useState } from "react";
import { WeatherInfo } from "../components/WheatherInfo/WheatherInfo";

export function Home() {
    const [weather, setWeather] = useState(null);
    const inputRef = useRef();

    async function searchCity() {
        console.log(inputRef.current.value);
        const city = inputRef.current.value;
        const apiKey = '89549a0c1ef4ac878894ea64735fd60d';
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

        try {
            const results = await axios.get(urlAPI);
            setWeather(results.data);
        } catch (error) {
            console.error("Erro ao buscar dados da cidade:", error);
            setWeather(null);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-zinc-100 font-bold text-4xl py-6 uppercase">Climatic</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="Digite o nome da cidade"
                className="text-center w-64 h-10 mb-4" 
            />
            <button onClick={searchCity} className="h-10 px-4 bg-blue-500 text-white rounded">Buscar</button>
            {weather && <WeatherInfo weather={weather} />}
        </div>

    );
}
