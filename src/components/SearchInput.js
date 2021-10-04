import React, {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import Loader from "react-loader-spinner";
import {toast, ToastContainer} from 'react-toastify';
import axios from "axios";


import Title from "./Title";
import Flex from "./Flex";
import styles from '../css/SearchInput.module.css'
import {ItemsContainer, StyledSearch} from "../styled";
import Weather from "./Weather";


const SearchInput = () => {

    const [value, setValue] = useState('')
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    console.log(error, 'error')

    const API_KEY = process.env.REACT_APP_API_KEY || ""

    const onSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
            .then(function (response) {
                setData(response.data)
                setValue('')
                setLoading(false)
            })
            .catch(function (error) {
                setError(error.message)
            })
            .then(function () {
                setLoading(false)
            })
    }

    if (error) {
        toast.error('Couldn\'t get weather data')
    }

    const inputChange = e => {
        setError(null)
        setValue(e.target.value)
    }
    return (
        <StyledSearch>
            <Flex justify="center">
                <ItemsContainer>
                    <Title size="4rem" margin="5px 0">Weather</Title>
                    <form onSubmit={onSubmit}>
                        <div className={styles.relative}>
                            <input
                                value={value}
                                onChange={inputChange}
                                className={styles.input}
                                placeholder="City..."
                            />
                            <AiOutlineSearch className={styles.icon}/>
                        </div>
                    </form>

                    <Flex justify="center">
                        {loading && <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />}
                        <div>{data.hasOwnProperty('name') ? <Weather weather={data}/> :
                            <Title size="3rem" weight="bold">Nothing found yet</Title>}</div>
                        {error && <ToastContainer
                            hideProgressBar={true}
                            closeOnClick
                        />}
                    </Flex>
                </ItemsContainer>
            </Flex>
        </StyledSearch>
    );
};

export default SearchInput;