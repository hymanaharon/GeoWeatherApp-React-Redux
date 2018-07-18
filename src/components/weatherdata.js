import React from 'react'
//import PropTypes from 'prop-types'

class Weatherdata extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      temp:'',
      description:'',
      city: '',
      county:'',
      weatherbg:''
    };
    this.setWeather = this.setWeather.bind(this);
  }

  getWeather () {
    let self = this;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Jerusalem,IL&APPID=20a5ca4f642080493675e573392c7e03')
      .then (response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(data => {
        self.setWeather(data);
      });
    })
    .catch (err => {
      console.log('Fetch Error :-S', err);
    });
  }

  setWeather (weatherdata) {
    this.setState({
      kTemp: weatherdata.main.temp,
      description: weatherdata.weather[0].description,
      city: weatherdata.name,
      country: weatherdata.sys.country,
      weatherbg: weatherdata.weather[0].id
    });
  }

  componentWillMount() {
    this.getWeather();
  }

  render() {
  const kTemp=(this.state.kTemp);
  const cTemp=(kTemp-273.15).toFixed(0);
  const fTemp=(kTemp*(9/5)-459.67).toFixed(0);
  console.log(cTemp , fTemp );
    return (
      <div>
      <h1>The Current Temperature in Jerusalem is {cTemp} Celcius or {fTemp} Fahrenheit</h1>
      <h2>The Weather is {this.state.description}</h2>
      </div>
    )
  }
}
export default Weatherdata;
