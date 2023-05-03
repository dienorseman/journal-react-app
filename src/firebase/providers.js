import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
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

        await updateProfile( FirebaseAuth.currentUser, { displayName: name } )

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

export const loginWithEmailAndPassword = async ( email, password ) => {
    try {
        
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password )

        const user = resp.user

        const { displayName, photoURL, uid } = user

        return {
            ok: true,
            uid, displayName, photoURL
        }

            
    } catch (error) {

        const { code, message } = error
        return {
            ok: false,
            code, message
        }
        
    }
}

export const LogoutFirebase = async () => {
    return await FirebaseAuth.signOut()
}