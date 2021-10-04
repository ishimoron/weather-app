import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.div`
  color: ${({color}) => color || '#fff'};
  font-size: ${props => props.size};
  font-weight: ${({weight})=> weight || 400};
  margin: ${props => props.margin};
  font-family:  "abel-regular", Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
`
const Title = (props) => {
    return <StyledTitle {...props}/>
};

export default Title;