import React from 'react';
import Flex from "../components/Flex";
import SearchInput from "../components/SearchInput";
import {HomeContainer} from "../styled";

const Home = () => {



    return (
        <HomeContainer>
            <Flex justify="center">
                <SearchInput/>
            </Flex>
        </HomeContainer>
);
};

export default Home;