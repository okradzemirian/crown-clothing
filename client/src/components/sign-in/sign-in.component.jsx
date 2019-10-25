import React, { useState } from 'react'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
    SignInContainer,
    TitleContainer,
    ButtonsContainer,
} from './sign-in.styles'

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setUserCredentials({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUserCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />

                <ButtonsContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                        Sign In With Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn
