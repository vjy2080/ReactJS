import React, { useState } from 'react';
import './App.css';

// Define the API configuration
const api = {
  key: "ff431b01e24bf42cc8b9d90009e86b7f",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  // Initialize state variables
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  // Function to handle the search button click
  const searchbtn = () => {

    // Fetch weather data from the API
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
          <div className="col border border-dark mt-3 ">
            <h1 className='text-center my-1'>Weather Detail</h1>
            <div className="result text-center">
              <div className="inpbtn my-1">
                {/* Input field for city name */}
                <input
                  className='text-center p-1'
                  type="text"
                  placeholder='City Name'
                  onChange={(e) => setSearch(e.target.value)}

                // We can set result by enter city name directly by onKeyDown method (Need to remove button for it)
                // onKeyDown={searchbtn}
                />

                {/* Search button */}
                <button
                  className='mx-2 button-42'
                  type="button"
                  value="Search"
                  onClick={searchbtn}>Search</button>
              </div>

              <hr />
              {/* Conditional rendering based on weather data */}
              {typeof weather.main && weather.coord && weather.wind && weather.weather !== "undefined" ? (
                <div className='finalResult'>
                  {/* Display weather details in a table */}
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
                // Render empty table if weather data is not available
                <div className='finalResult'>
                  <table className="my-table">
                    <tbody>
                      <tr>
                        <th className='mainRow' colSpan={2}>Result</th>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>{""}</td>
                      </tr>
                      <tr>
                        <th>Latitude</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Longitude</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Visibility</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Wind-Speed</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Temperature</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Feels Like</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Pressure</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Humidity</th>
                        <td>{""}</td>

                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>{""}</td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
