import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

import './App.css'

const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() =>
    import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'),
)
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const App = ({ currentUser, setCurrentUser }) => {
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    })
                })
            } else {
                setCurrentUser(user)
            }
        })

        return () => {
            unsubscribeFromAuth()
        }
    }, [setCurrentUser])

    return (
        <div>
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route
                            exact
                            path='/checkout'
                            component={CheckoutPage}
                        />
                        <Route
                            exact
                            path='/signin'
                            render={() =>
                                currentUser ? (
                                    <Redirect to='/' />
                                ) : (
                                    <SignInAndSignUpPage />
                                )
                            }
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
