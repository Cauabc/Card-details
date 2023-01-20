import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Space Grotesk', sans-serif;
    position: relative;
    width: 35vw;
    height: 100vh;
    background-image: url("/images/bg-main-desktop.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 430px) {
        width: 100vw;
        height: 35vh;
        background-image: url("/images/bg-main-mobile.png");
    }

    /* .frontCard, .backCard{
        position: absolute;
        width: 26vw;
    }

    .frontCard{
        top: 20vh;
        left: 18vw;
    }

    .backCard{
        top: 54vh;
        left: 25vw;
    }

    .cardNumber{
        color: #fff;
    } */
`

export const FrontCard = styled.div`
    position: relative;
    top: 15vh;
    left: 14vw;


    .cardNumber{
        width: 100vw;
        position: absolute;
        color: #fff;
        font-size: 2.1em;
        z-index: 100;
        top: 140px;
        left: 20px;
        @media screen and (max-width: 430px) {
            top: 90px;
            font-size: 1.3em;
        }
    }
    .validation{
        position: absolute;
        left: 350px;
        bottom: 30px;
        color: #fff;
        @media screen and (max-width: 430px) {
            left: 220px;
            font-size: .7em;
            bottom: 20px;
            color: hsl(270, 3%, 87%);
        }

    }
    .nameCard{
        color: #fff;
        position: absolute;
        left: 21px;
        bottom: 30px;
        @media screen and (max-width: 430px) {
            font-size: .7em;
            bottom: 19px;
            letter-spacing: 2px;
            color: hsl(270, 3%, 87%);

        }
    }
    .cardLogo{
        position: absolute;
        top: 20px;
        left: 20px;
        @media screen and (max-width: 430px) {
            width:18vw;
        }
    }
    .frontCard{
        border-radius: 10px;
        box-shadow: 2px 0px 10px -3px;
        @media screen and (max-width: 430px) {
            width: 83vw;
        }
    }
    @media screen and (max-width: 430px) {
        left: 4vw;
        top: 16vh;
        z-index: 10;
    }
        
    

`

export const BackCard = styled.div`
    position: relative;
    top: 18vh;
    left: 18vw;

    .cvv{
        position: absolute;
        color: #fff;
        bottom: 118px;
        left: 350px;
        letter-spacing: 2px;
        font-size: 1.1em;
        z-index: 20;

        @media screen and (max-width: 360px) {
            left: 55vw;
            bottom: 4.4rem;
            font-size: .8rem;
        }
        @media screen and (max-width: 430px) {
            left: 55vw;
            bottom: 19.5vw;
            font-size: .8rem;
        }
    }

    .backCard{
        border-radius: 10px;
        box-shadow: 2px 0px 10px -3px;
        @media screen and (max-width: 430px) {
            width: 73vw;
        }
    }
    @media screen and (max-width: 430px) {
        left:19vw;
        top: -42vw;
    }


`
