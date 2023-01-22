import styled from "styled-components";

export const Form = styled.div`
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    font-family: 'Space Grotesk', sans-serif;
    color: hsl(278, 68%, 11%);
    @media screen and (max-width: 430px){
        margin-left: 0;
        position: relative;
        top: -10vw;
    }
    #cardName{
        position: relative;
        z-index: 100;
    }

    input{
        width: 24vw;
        padding: 9px;
        border-radius: 5px;
        border: 1px solid hsl(270, 3%, 87%);
        outline: none;
        margin-bottom: 1em;
        color: #000;

        @media screen and (max-width: 430px){
            width: 70vw
        }

        &::placeholder{
            font-family: 'Space Grotesk', sans-serif;
            color: hsl(279, 6%, 60%);
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    label{
        letter-spacing: 2px;
        font-weight: bold;
        font-size: .7rem;
        margin-bottom: 5px;
    }

    button{
        cursor: pointer;
        border-radius: 8px;
        border: none;
        height: 2.5rem;
        background-color: hsl(278, 68%, 11%);
        color: #fff;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: 1px;
    }
    .empty{
        border: 1px solid hsl(0, 100%, 66%);
    }
`

export const expAndCVV = styled.div`
    display: flex;
    justify-content: space-between;
    .empty{
        border: 1px solid hsl(0, 100%, 66%);
    }
`

export const ExpirationDate = styled.div`
    letter-spacing: 2px;
    font-weight: bold;
    font-size: .7rem;
    p{
        margin-bottom: 5px;
    }
    #month, #year{
        margin-right: 10px;
        width: 3.9rem;
        
    }
    .empty{
        border: 1px solid hsl(0, 100%, 66%);
    }
`
export const CVV = styled.div`
    display: flex;
    flex-direction: column;
    input{
        width: 10rem;
        @media screen and (max-width: 430px){
            width: 7rem
        }
    }
    .empty{
        border: 1px solid hsl(0, 100%, 66%);
    }
`

export const ExpirationDateInputs = styled.div`
    display: flex;
`