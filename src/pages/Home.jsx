import axios from "axios";
import { useRef, useState } from "react"
import { WeatherInfo } from "../components/WheatherInfo/WheatherInfo";

export function Home() {
    const [weather, setWeather] = useState({})
    const inputRef = useRef()

    async function searchCity() {
        console.log(inputRef.current.value);
        const city = inputRef.current.value
        const apiKey = '89549a0c1ef4ac878894ea64735fd60d'; 
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

        const results = await axios.get(urlAPI)
        setWeather(results.data)
        console.log(results.data);
    }

    return (
        <>
            <h1>Climatic Home</h1>
            <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
            <button onClick={searchCity}>Buscar</button>

            <WeatherInfo weather={weather} />
        </>
    )
}