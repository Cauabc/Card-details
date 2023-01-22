import { Form } from '../form/Form'
import ThankYou from '../thankyou/ThankYou'
import * as S from './styles'
import CNameContext from '../../contexts/CNameContext'
import { useContext } from 'react'

export const Rightside = () => {

    const {isConfirmed, setIsConfirmed} = useContext(CNameContext)

    return (
        <S.Container>
            {!isConfirmed && <Form/>}
            {isConfirmed && <ThankYou/>}
        </S.Container>
    )
}