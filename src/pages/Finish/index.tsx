import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const Finish = ()=>{
     const history = useNavigate()
     const {state, dispatch} = useForm()   

     useEffect(()=>{
        if(state.name === ''){
            history('/')
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }
    },[]) 

/*     const handleNextStep = ()=>{
        if(state.email !== '' && state.github !== ''){
             console.log(state)
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
    } */
    return(
     <Theme>
            <C.Container>
            <p>Cadastro finalizado !</p>
            <h1>Parabéns, {state.name}</h1>
            <h1>Confira seus dados abaixo !</h1>
             
            <hr/>

            <label>
                Seu e-mail é {state.email}
                </label>
               
            <label>
                Seu github é {state.github}
                </label>
                <label>E você está no nivel {state.level}</label>
   
             <Link className='backButton' to='/step3'>Editar</Link>

        </C.Container>
     </Theme>
    )
}