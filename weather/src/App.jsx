import React, { useState } from 'react';
import './App.css';


const api = {
  key: "ff431b01e24bf42cc8b9d90009e86b7f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchbtn = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      })
  }
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col border border-primary mt-5 ">
            <h1 className='text-center my-3'>Weather Detail</h1>
            <div className="result text-center">
              <div className="text-center my-5">
                <input
                  className='text-center p-1'
                  type="text"
                  placeholder='City Name'
                  onChange={(e) => setSearch(e.target.value)}
                />


                <input className='mx-2 '
                  type="button"
                  value="Search"
                  onClick={searchbtn}
                />
              </div>

              <hr />
              {typeof weather.main && weather.coord && weather.wind && weather.weather !== "undefined" ? (
                <div className='finalResult'>

                  <table className="my-table">
                    <tbody>
                      <tr>
                        <th className='mainRow' colSpan={2}>Result</th>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>{weather.name}</td>
                      </tr>
                      <tr>
                        <th>Latitude</th>
                        <td>{weather.coord.lat}</td>
                      </tr>
                      <tr>
                        <th>Longitude</th>
                        <td>{weather.coord.lon}</td>
                      </tr>
                      <tr>
                        <th>Visibility</th>
                        <td>{weather.visibility / 1000} KM</td>
                      </tr>
                      <tr>
                        <th>Wind-Speed</th>
                        <td>{weather.wind.speed} m/s</td>
                      </tr>
                      <tr>
                        <th>Temperature</th>
                        <td>{weather.main.temp} °С</td>
                      </tr>
                      <tr>
                        <th>Feels Like</th>
                        <td>{weather.main.feels_like} °С</td>
                      </tr>
                      <tr>
                        <th>Pressure</th>
                        <td>{weather.main.pressure} hpa</td>
                      </tr>
                      <tr>
                        <th>Humidity</th>
                        <td>{weather.main.humidity} %</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>({weather.weather[0].description})</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;