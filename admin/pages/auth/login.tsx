import Layout from '../../layouts/main'
import {useRouter} from 'next/router'
import {useState, useContext} from 'react'
import styled from 'styled-components'
import { SectionNarrow, ButtonFull } from '../../styles'
import {Context} from '../../globals/stateProvider'

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Context)

    const router = useRouter()

    async function login(e){
        e.preventDefault()

        try{
            const response = await fetch('/api/login',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            })
    
            const data = await response.json()
    
            if(data.user){
                setUser(data.user)
                return router.push('/')
            }
            return 
        }catch(e){
            console.error(e)
            
        }
    }
    return (
        <Layout>
            <SectionNarrow>
                <LoginForm onSubmit={login}>
                    <Field>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </Field>
                    <Field>
                        <label htmlFor="email">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)}/>
                    </Field>
                    <ButtonFull margin='1.4rem 0' type="submit">Login</ButtonFull>
                </LoginForm>
            </SectionNarrow>
        </Layout>
    )
}

const LoginForm = styled.form`
    margin: 4.7rem 0;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-size: 1.6rem;
        margin: .9rem 0;
    }

    input{
        max-width: 45rem;
        padding: .9rem 1.4rem;
        border: 1px solid ${p=>p.theme.grey3};
    }

`