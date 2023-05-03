import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSvaing: true,
        notes: [],
        messageSaved: '',
        active: {
            id: null,
            title: '',
            body: '',
            date: null,
            imageUrls: null,
        }
    },
    reducers: {
        addNote: (state, action ) => {
            state.isSvaing += 1;
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload;
        },
        addNewNote: (state, action ) => {
            
        },
    }
});


// Action creators are generated for each case reducer function
export const { addNote, addNewNote, setActiveNote } = journalSlice.actions;