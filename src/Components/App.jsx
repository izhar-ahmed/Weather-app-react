import React, { useEffect, useState } from "react";

const App = () => {

    const [search, Setsearch] = useState(null);
    const [city, Setcity] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f122b4b1a8ec94a3c0d6fd4e48bb5e82&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            Setcity(resJson.main.temp);
        };
        fetchApi();
    }, [search]);


    return (
        <>
            <h1 style={{ "color": "red" }}>Weather App</h1>
            <input type="search" onChange={(event) => {
                Setsearch(event.target.value);
            }} />
            {!search ? (
                <p>No Data Found</p>
            ) : (
                <div>
                    <h2>{search}</h2>
                    <h3>{city}</h3>
                </div>
            )

            }

        </>
    )
}

export default App;

// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f122b4b1a8ec94a3c0d6fd4e48bb5e82&units=metric"
