import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import {useForm, FormActions} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = ()=>{
    const history = useNavigate()
    const {state, dispatch} = useForm()    

    useEffect(()=>{
        if(state.name === ''){
            history('/')
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }
    },[])

    const handleNextStep = ()=>{
        if(state.name !== ''){
            history('/step3')
        }else{
            alert('Preencha os dados.')
        }
           
    }
    const setLevel = (level: number)=>{
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }
   
    return(
     <Theme>
            <C.Container>
            <p>Passo 2/3 - {state.currentStep}</p>
            <h1>{state.name}, o que melhor descreve você ?</h1>
            <p>Escolha a opção que melhor condiz com seu estado atual profissional</p>

            <hr/>

            <SelectOption
            title='Sou iniciante'
            description='Comecei a programar há menos de 2 anos'
            icon=':)'
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
            />
              <SelectOption
            title='Sou programador'
            description='Sou programador e já programo'
            icon=':/'
            selected={state.level === 1}
            onClick={()=>setLevel(1)}
            />
            <Link className='backButton' to='/'>Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
     </Theme>
    )
}