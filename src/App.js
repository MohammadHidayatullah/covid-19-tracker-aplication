/** @format */

import "./App.css";
import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(data);

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    // console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className='container'>
        <img
          className='image'
          src='https://i.ibb.co/7QpKsCX/image.png'
          alt='COVID-19'
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
