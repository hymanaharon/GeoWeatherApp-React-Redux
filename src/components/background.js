import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGeoData } from "../actions/getData";
import clouds from '../images/clouds.jpg'
import clearskies from '../images/clearskies.jpg'
import thunderstorm from '../images/thunderstorm.jpg'
import rain from '../images/rain.jpg'
import snow1 from '../images/snow1.jpg'
import duststorm from '../images/duststorm.jpeg'
import tornado from '../images/tornado.jpg'
import loading from '../images/loading.gif'

 class Background extends Component{

   componentWillMount() {
     this.props.fetchGeoData();
   }

render(){
   return (
      <div>
      {this.weatherId()}
      </div>
   );
   }

   weatherId(){
      if (!this.props.geoData || !this.props.geoData.weather) {
        return (
          <img className='background' src={loading} width='10%'  alt="loading" />
        )
      } else  {
        var weatherCode = this.props.geoData.weather.weather[0].id;


          if(weatherCode < 300){
            return ( <img className='background' src={thunderstorm} width='100%'  alt="thunderstorm" />)}
              else if(weatherCode>= 300 && weatherCode< 600 ){
                return ( <img className='background' src={rain} width='100%'  alt="rain" />)}
              else if(weatherCode>= 600 && weatherCode< 700 ){
                  return ( <img className='background' src={snow1} width='100%'  alt="snow" />)}
              else if(weatherCode>= 700 && weatherCode< 780 ){
                  return ( <img className='background' src={duststorm} width='100%'  alt="duststorm" />)}
              else if(weatherCode>= 781 && weatherCode< 800 ){
                  return ( <img className='background' src={tornado} width='100%'  alt="tornado" />)}
              else if(weatherCode === 800){
                  return ( <img className='background' src={clearskies} width='100%'  alt="clearskies" />)}
              else if(weatherCode> 800){
                  return ( <img className='background' src={clouds} width='100%'  alt="clouds" />)}
          /*(weatherCode) => {
            switch (weatherCode){
            case 800:
              return ( <img className='background' src={clearskies} width='100%'  alt="clearskies" />);
              break
            default:
              return (<img className='background' src={clouds} width='100%'  alt="clouds" />);
            }
          }*/

//switch statement returning <img className='background' src={clouds} width='100%'  alt="clouds" />


}
    }

 };


 const mapStateToProps = state => {
   console.log("STATE:", state);
   return {
     geoData: state.geoData
   };
 };

 export default connect(mapStateToProps, { fetchGeoData })(Background);
