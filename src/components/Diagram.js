import React from 'react';
import Chart from 'react-apexcharts'

const Diagram = (props) => {

    const {temperaturesForecast, temperaturesForecastLabels} = props.data


    const diagramOptions = {
        series: [{
            name: 'Inflation',
            data: [...temperaturesForecast]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            colors: '#1fa69d',
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'center', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "°C";
                },
                offsetY: 10,
                style: {
                    fontSize: '1.6rem',
                    colors: ['#fff']
                }
            },

            xaxis: {
                categories: [...temperaturesForecastLabels],
                position: 'bottom',
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false,
                },
                labels: {
                    style: {
                        colors: '#fff',
                        fontSize: '1.5rem'
                    },
                }
            },

            yaxis: {
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: true,
                    align: 'right',
                    formatter: function (val) {
                        return val + "°C";
                    },
                    style: {
                        colors: '#fff',
                        fontSize: '1.5rem'
                    },
                }
            },
        },
    }

    return (
        <div className="diagram">
            <Chart options={diagramOptions.options} series={diagramOptions.series} type="bar"/>
        </div>
    )
};

export default Diagram;