import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth } from './config'



const googleProvider = new GoogleAuthProvider()


export const signInWithgoogle = async () => {
    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider )

        const user = result.user

        const { displayName, email, photoURL, uid } = user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    
    } catch (error) {

        const { code, message } = error

        return {
            ok: false,
            code, message
        }
        
    }
}

export const registerWithEmailAndPassword = async ( name, email, password ) => {
    try {
        

        const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password )

        const user = result.user

        return {
            ok: true,
            displayName: name, email: user.email, photoURL: user.photoURL, uid: user.uid
        }

            
    } catch (error) {

        const { code, message } = error

        return {
            ok: false,
            code, message
        }
        
    }
}