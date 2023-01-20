import * as S from './styles'

export const Leftside = () => {
    return (
        <S.Container>
            <S.FrontCard>
                <img className='frontCard' src="/images/bg-card-front.png" alt="Front Side of the Card" />
                <span className="cardNumber">0000 0000 0000 0000</span>
                <span className="validation">00/00</span>
                <span className="nameCard">JANE APPLESEED</span>
                <img src="/images/card-logo.svg" alt="Card Logo" className="cardLogo" />
            </S.FrontCard>
            <S.BackCard>
                <img className='backCard' src="/images/bg-card-back.png" alt="Back Side of the Card" />
                <span className="cvv">000</span>
            </S.BackCard>
        </S.Container>
    )
}