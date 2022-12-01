import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBX9awN1RN5vkpA_vkNVS-M-1YmLOLXZU8',
    authDomain: 'rakoms-todo.firebaseapp.com',
    projectId: 'rakoms-todo',
    storageBucket: 'rakoms-todo.appspot.com',
    messagingSenderId: '376350383323',
    appId: '1:376350383323:web:bb9468e8c3e369f56640fe'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}
