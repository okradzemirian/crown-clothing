import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyBmqQsz15DuZ6lSIN2a4TmowdAJIlnMQeY',
    authDomain: 'crown-ecommerce-43646.firebaseapp.com',
    databaseURL: 'https://crown-ecommerce-43646.firebaseio.com',
    projectId: 'crown-ecommerce-43646',
    storageBucket: 'crown-ecommerce-43646.appspot.com',
    messagingSenderId: '807708233947',
    appId: '1:807708233947:web:72212ec522525339387cfe',
    measurementId: 'G-FFLZPQB4L4',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
