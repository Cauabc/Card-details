import styled from "styled-components";

export const Container = styled.div`
    margin-left: 10rem;
    text-align: center;
    font-family: 'Space Grotesk', sans-serif;
    h1{
        margin-top: 1rem;
        color: hsl(278, 68%, 11%);
        letter-spacing: 2px;
        font-weight: 400;
    }
    p{
        color: #333;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    button{
        width: 100%;
        cursor: pointer;
        border-radius: 8px;
        border: none;
        height: 2.5rem;
        background-color: hsl(278, 68%, 11%);
        color: #fff;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: 1px;
    }
    @media screen and (max-width:430px){
        margin-left: 0;
        position: relative;
        top: -10vw;
    }
`
