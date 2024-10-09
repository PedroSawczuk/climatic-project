import axios from "axios";
import { useRef, useState } from "react";
import { WeatherInfo } from "../components/WheatherInfo/WheatherInfo";

export function Home() {
    const [weather, setWeather] = useState(null); // Mude o estado inicial para null
    const inputRef = useRef();

    async function searchCity() {
        console.log(inputRef.current.value);
        const city = inputRef.current.value;
        const apiKey = '89549a0c1ef4ac878894ea64735fd60d'; 
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

        try {
            const results = await axios.get(urlAPI);
            setWeather(results.data); // Define o estado com os dados da API
        } catch (error) {
            console.error("Erro ao buscar dados da cidade:", error);
            setWeather(null); // Reseta o estado em caso de erro
        }
    }

    return (
        <>
            <h1>Climatic Home</h1>
            <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
            <button onClick={searchCity}>Buscar</button>

            {/* Renderiza WeatherInfo apenas se houver dados de clima */}
            {weather && <WeatherInfo weather={weather} />}
        </>
    );
}
