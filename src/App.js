import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
<<<<<<< HEAD
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
=======
import { auth } from './firebase/firebase.utils'
>>>>>>> b326256fef722c8c0b7d8b8cc67b96f6d0ccfc5d

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    })
                })
            } else {
                this.setState({ currentUser: user })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUp} />
                </Switch>
            </div>
        )
    }
}

export default App
