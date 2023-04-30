import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        erroorMessage: null,
    },

    reducers: {
        login: ( state, { payload } ) => {
            const { uid, email, displayName, photoURL } = payload;
            state.status = 'authenticated';
            state.uid = uid;
            state.email = email;
            state.displayName = displayName;
            state.photoURL = photoURL;
            state.erroorMessage = null;
        },
        logout: ( state ) => { 
                state.status = 'not-authenticated';
                state.uid = null;
                state.email = null;
                state.displayName = null;
                state.photoURL = null;
                state.erroorMessage = null;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;