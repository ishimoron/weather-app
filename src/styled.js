import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
`

export const StyledSearch = styled.div`
  width: 500px;
  min-height: 100vh;
  display: flex;
`

export const Relative = styled.div`
  position: relative;
`

export const ItemsContainer = styled.div`
  width: 500px;
  text-align: center;
  @media ${props => props.theme.media.phone} {
    max-width: 100vw;
  }
`

// export const Error = styled.h1`
//   color: red;
//   font-size: 3rem;
// `