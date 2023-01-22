import * as S from './styles'
import CNameContext from '../../contexts/CNameContext'
import { useContext } from 'react'

export const Leftside = () => {

    const { cardName, cardNumber, cvv, mm, yy } = useContext(CNameContext)

    return (
        <S.Container>
            <S.FrontCard>
                <img className='frontCard' src="/images/bg-card-front.png" alt="Front Side of the Card" />
                <span className="cardNumber">{cardNumber ? cardNumber : '0000 0000 0000 0000'}</span>
                <span className="validation">{mm ? mm : '00'}/{yy ? yy : '00'}</span>
                <span className="nameCard">{cardName ? cardName : 'Jane Appleseed'}</span>
                <img src="/images/card-logo.svg" alt="Card Logo" className="cardLogo" />
            </S.FrontCard>
            <S.BackCard>
                <img className='backCard' src="/images/bg-card-back.png" alt="Back Side of the Card" />
                <span className="cvv">{cvv ? cvv : '000'}</span>
            </S.BackCard>
        </S.Container>
    )
}