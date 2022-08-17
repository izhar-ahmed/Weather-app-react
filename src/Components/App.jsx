import React, { useEffect, useState } from "react";
import "./styles.css";

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
        <div className="box">
        <div className="ocean">
            <h1 style={{ "color": "#ffffff" }}>Weather App</h1>
            <input className="custome-inp" type="search" onChange={(event) => {
                Setsearch(event.target.value);
            }} />
            {!search ? (
                <p className="custome-color">No Data Found</p>
            ) : (
                <div>
                    <h2 className="custome-color">{search}</h2>
                    <h3 className="custome-color">{city}</h3>
                </div>
            )

            }
            <div class="bubble bubble--1"></div>
  <div class="bubble bubble--2"></div>
  <div class="bubble bubble--3"></div>
  <div class="bubble bubble--4"></div>
  <div class="bubble bubble--5"></div>
  <div class="bubble bubble--6"></div>
  <div class="bubble bubble--7"></div>
  <div class="bubble bubble--8"></div>
  <div class="bubble bubble--9"></div>
  <div class="bubble bubble--10"></div>
  <div class="bubble bubble--11"></div>
  <div class="bubble bubble--12"></div>
  <div id="octocat"></div>
            </div>
            </div>
        </>
    )
}

export default App;

// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f122b4b1a8ec94a3c0d6fd4e48bb5e82&units=metric"
