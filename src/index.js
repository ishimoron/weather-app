import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';


import App from './App';
import './main.css'
import './css/weather-icons.css'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`

const theme = {
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 768) and (min-width: 425px)",
    }
}
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

