
import React from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = 'c3712263f79a237460fe0054b15bb3c3';

class WeatherApp extends React.Component {
  state = {
    value: '',
    city: '',
    country: '',
    date: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  } 

  inputChange = (e)=> {
    this.setState({
      value: e.target.value
    })
  }

componentDidUpdate(prevProps, prevState) { 
  if(prevState.value !== this.state.value) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&cnt=5&appid=${APIKey}&units=metric`;

  fetch(API) 
        .then(response=> {
          if(response.ok) {
            return response;
          }
          throw Error('Wystąpił problem')
        })
        .then(response=> response.json()) 
        .then(data=> {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            city: prevState.value,
            country: data.sys.country,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false,
          }))
        })
        .catch(error=> {
          this.setState(prevState=> ({
            err: true,
            city: prevState.value,
            country: '',
            date: '',
            sunrise: '',
            sunset: '',
            temp: '',
            pressure: '',
            wind: '',
          }))
        })
  } 
}
  
  render() { 
    return (
      <div className='App'>
        <Form value={this.state.value} change={this.inputChange} />
        
        <Result weather={this.state}/>
      </div>
    )
  }
}

export default WeatherApp;