import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = ()=>{
    const history = useNavigate()
    const {state, dispatch} = useForm()    

    useEffect(()=>{
        if(state.name === ''){
            history('/')
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }
    },[])

    const handleNextStep = ()=>{
        if(state.email !== '' && state.github !== ''){
             history('/finish')
        }else{
            alert('Insira todos os dados !')
        }
     
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }
    return(
     <Theme>
            <C.Container>
            <p>Passo 3/3</p>
            <h1>Legal {state.name}, onde te achamos ?</h1>
            <p>Preencha com seus dados para entrarmos em contato.</p>

            <hr/>

            <label>
                Qual é seu e-mail ?
                <input 
                type='text'
                value={state.email}
                onChange={handleEmailChange}
                />
            </label>
            <label>
                Qual é seu github ?
                <input 
                type='text'
                value={state.github}
                onChange={handleGithubChange}
                />
                </label>
                <Link className='backButton' to='/step2'>Voltar</Link>
   
            <button onClick={handleNextStep}>Finalizar Cadastro</button>
        </C.Container>
     </Theme>
    )
}