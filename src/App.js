import React,{useState} from "react";
import "./styles.css";

import {covidData} from './api/api'

import {dailyData} from './api/api'

import ButtonAppBar from './components/navbar'

import SimpleCard from './components/cards'

import Chart from './components/chart'

import {Picker} from './components/picker'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await covidData();
    this.setState({ data: fetchedData});
  }

  handleCountryChange = async (country) =>{

  const countrydata = await covidData(country)
  this.setState({data: countrydata,country:country})

  }
  render(){
    const {data,country} = this.state;

    return (
      <div className="App">

        <ButtonAppBar/>
        <div className = 'comp'>
        <SimpleCard data = {data}/>
        <Picker handleCountryChange = {this.handleCountryChange}/>
        <Chart data = {data} country = {country}/>
        </div>
      </div>
    );
  }
}

export default App
