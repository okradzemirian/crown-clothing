import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles.jsx'

const SignInAndSignUp = () => (
    <SignInAndSignUpPageContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageContainer>
)

export default SignInAndSignUp
