import { defineStore } from 'pinia'
import { getAuth
  , createUserWithEmailAndPassword
  , signOut
  , signInWithEmailAndPassword
  , onAuthStateChanged } from 'firebase/auth'
import {useStoreNotes} from '@/stores/storeNotes'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {
      }
    }
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes()
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid,
          this.user.email = user.email
          this.router.push('/')
          storeNotes.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
          storeNotes.clearNotes()
        }
      });
    },
    registerUser(credentials) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.info('user: ', user)
        })
        .catch((error) => {
          console.info('error.message: ', error.message)
        })
    },
    logoutUser() {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.info('success logout')
      }).catch((error) => {
        console.info('fail logout')
      });
    },
    login(credentials) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.info('success login')
        })
        .catch((error) => {
          console.info('fail login')
        });
    }
  }
})
