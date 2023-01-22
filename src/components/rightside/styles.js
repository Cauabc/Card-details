import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65vw;
    height: 100vh;
    background-color: #fff;
    @media screen and (max-width: 430px){
        width: 100vw;
        height: 150vw;
    }
`