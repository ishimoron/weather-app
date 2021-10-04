import React, {useEffect, useState} from 'react';
import AnimatedNumber from 'animated-number-react'
import {kelvinToC} from "../utils/tempretureConverter";
import Temperature from "./Temperature";
import {dateFromTimestamp, timeFromTimestamp} from "../utils/timeConverter";
import Flex from "./Flex";
import Title from "./Title";
import Icons from "../utils/icons";
import Diagram from "./Diagram";
import axios from "axios";

const Weather = (props) => {

    const {name, wind, main, weather, dt, coord} = props.weather;

    const formatValue = (value) => value.toFixed(0);

    const actualTemperature = kelvinToC(main.temp).toFixed(0)
    const minTemperature = kelvinToC(main.temp_min).toFixed(0)
    const maxTemperature = kelvinToC(main.temp_max).toFixed(0)
    const weatherIcon = Icons(weather[0].id)
    const date = dateFromTimestamp(dt)


    const BASE_URL = "https://api.openweathermap.org/data/2.5/";
    let geoCoordinates = `&lat=${coord.lat}&lon=${coord.lon}`;
    const weatherForecastUrl = `${BASE_URL}forecast?appid=${process.env.REACT_APP_API_KEY}${geoCoordinates}`;


    const [temperaturesForecast, setTemperaturesForecast] = useState([])
    const [temperaturesForecastLabels, setTemperaturesForecastLabels] = useState([])

    useEffect(() => {
        const newTemperatureForecast = []
        const newTemperaturesForecastLabels = []
        axios.get(weatherForecastUrl).then(function (res) {
            for (let i = 0; i < 5; i++) {
                newTemperatureForecast[i] = Number(kelvinToC(res.data.list[i].main.temp).toFixed(1));
                newTemperaturesForecastLabels[i] = timeFromTimestamp(res.data.list[i].dt);
            }
            setTemperaturesForecast(newTemperatureForecast)
            setTemperaturesForecastLabels(newTemperaturesForecastLabels)
        })
    }, [name, weatherForecastUrl])

    return (
        <div className="detail">
            <Flex direction="row" justify="space-between" margin="10px 0">
                <Title size="2rem" weight="bold">{date}</Title>
                <Title size="2rem" weight="bold"><span style={{fontFamily: 'Source Code Pro'}}>{name}</span></Title>
            </Flex>


            <Temperature data={{actualTemperature, minTemperature, maxTemperature}}/>

            <div className="detail__wrap">
          <span className="detail__icon">
            <i className={weatherIcon}/>
          </span>
                <div className="detail__description">
                    {weather[0].description}
                </div>
            </div>

            <div className="detail__box">
                <div className="detail__indicator">
                    <div className="detail__info">
                        <AnimatedNumber
                            value={parseFloat(wind.speed)}
                            formatValue={(value) => value.toFixed(2)}
                        />
                        <span className="detail__measure">m/s</span>
                    </div>
                    <div className="detail__name">wind speed</div>
                </div>

                <div className="detail__indicator">
                    <div className="detail__info">
                        <AnimatedNumber
                            value={parseInt(main.humidity)}
                            formatValue={formatValue}
                        />
                        <span className="detail__measure">%</span>
                    </div>
                    <div className="detail__name">humidity</div>
                </div>

                <div className="detail__indicator">
                    <div className="detail__info">
                        <AnimatedNumber
                            value={parseInt(main.pressure)}
                            formatValue={formatValue}
                        />
                        <span className="detail__measure">hpa</span>
                    </div>
                    <div className="detail__name">pressure</div>
                </div>
            </div>
            <div>
                <Diagram data={{temperaturesForecastLabels, temperaturesForecast}}/>
            </div>
        </div>);
};

export default Weather;