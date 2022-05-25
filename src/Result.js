import React from 'react';

const Result = (props)=> {
    const {city, country, date, sunrise, sunset, temp, pressure, wind, err} = props.weather;
  
    let content = null;
    if(!err && city) {
      const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
      const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
      content = (
        <>
          <h2>Wyniki wyszukiwania dla: <em>{city} ({country})</em></h2>
          <h4>Data i godzina: {date}</h4>
          <h4>Aktualna temperatura: {temp} &#176;C</h4>
          <h4>Wschód słońca: {sunriseTime}</h4>
          <h4>Zachód słońca: {sunsetTime}</h4>
          <h4>Aktualne ciśnienie: {pressure} hPa</h4>
          <h4>Siła wiatru: {wind} m/s</h4>
        </>
      )
    } 
    return (
      <div className='result'>
        {err? `Brak wyników dla: ${city}` : content}
      </div>
    )
  }

export default Result;