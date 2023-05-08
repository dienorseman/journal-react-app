import { createSlice } from "@reduxjs/toolkit";
export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        notes: [],
        messageSaved: "",
        active: {
        id: null,
        title: "",
        body: "",
        date: null,
        imageUrls: [],
        },
    },
    reducers: {
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = "";
        },
        addNewNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        savingNote: (state) => {
            state.isSaving = true;
            state.messageSaved = "";
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        noteUpdated: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) =>
                note.id === action.payload.id ? action.payload : note
            );
            state.messageSaved = `${action.payload.title}, saved`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogout: (state) => {
            state.active = null
            state.notes = [];
            state.isSaving = false;
            state.messageSaved = "";
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
            state.active = null;
        },
    },
    });

// Action creators are generated for each case reducer function
export const {
  addNote,
  addNewNote,
  setActiveNote,
  savingNote,
  setNotes,
  noteUpdated,
  setPhotosToActiveNote,
  clearNotesLogout,
  deleteNote,
} = journalSlice.actions;
