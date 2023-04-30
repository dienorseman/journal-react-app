import { registerWithEmailAndPassword, signInWithgoogle } from "../../firebase";
import { checkingCredentials, login, logout } from "./authSlice";

export const chekingAuthentication = ( email, password ) => {

    return async ( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }

}

export const startGoogleLogin = () => {

        return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithgoogle()
        
        if ( !result.ok ) return dispatch( logout( result.message ) )
        dispatch( login( result ) )
    }
}

export const startCreatingWithEmailAndPasswod = ( name, email, password ) => {
    
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await registerWithEmailAndPassword( name, email, password )
        
        console.log( result );
    }

}
