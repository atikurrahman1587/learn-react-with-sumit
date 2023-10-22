import React from "react";
import BoilingVerdict from "./BoilingVerdict.jsx";
import TemperatureInput from "./TemperatureInput.jsx";
import {convert, toCelsius, toFahrenheit} from "./Converter.js";

export default class Calculator extends React.Component{
    state = {
        temperature: '',
        scale: 'c',
    }
    handelChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale
        })
    }
    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
          <>
              <TemperatureInput scale={'c'} temperature={celsius}  onTemperatureChange={this.handelChange} />
              <TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={this.handelChange} />
              <BoilingVerdict celsius={parseFloat(temperature)} scale={scale}/>
          </>
        );
    }
}