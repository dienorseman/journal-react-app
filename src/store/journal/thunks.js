import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { addNewNote, savingNote, setActiveNote, setNotes, noteUpdated, setPhotosToActiveNote, deleteNote } from "./journalSlice"
import { FirestoreDB } from "../../firebase";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
    try {
        return async ( dispatch, getState ) => {

            dispatch( savingNote() )
            
            const { uid } = getState().auth;

            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
                imageUrls: [],
            }

            const newDoc = doc( collection(FirestoreDB, `${uid}/journal/notes`) );

            await setDoc(newDoc, newNote);

            newNote.id = newDoc.id;

            dispatch( addNewNote( newNote ) );
            dispatch( setActiveNote( newNote ) );

        }
    } catch (error) {
        console.log(error);
    }
} 

export const startLoadingNotes = () => {
    try {
        return async ( dispatch, getState ) => {
            const { uid } = getState().auth;
            dispatch( setNotes( await loadNotes( uid ) ) );
        }
    } catch (error) {
        console.log(error);
    }
}

export const startSaveNote = ( note ) => {
    try {
        return async ( dispatch, getState ) => {

            dispatch( savingNote() );

            const { uid } = getState().auth;
            const { active } = getState().journal;

            const noteToFirestore = { ...active };
            delete noteToFirestore.id;

            const noteRef = doc( FirestoreDB, `${uid}/journal/notes/${active.id}` );

            await setDoc( noteRef, noteToFirestore, { merge: true } );

            dispatch( noteUpdated( note ) );
        }
    } catch (error) {
        console.log(error);
    }
}

export const startUploadingfiles = ( files = [] ) => {
    try {
        return async ( dispatch ) => { 

            dispatch( savingNote() )
            const fileUploadPromises = []
            for( const file of files) {
                fileUploadPromises.push(
                    await fileUpload( file )
                )
            }

            const photoUrls = await Promise.all( fileUploadPromises )

            dispatch( setPhotosToActiveNote( photoUrls ) )
    
        }
    } catch ( err ) {
        console.log( error );
    }
}

export const startDeletingNote = ( id ) => {
    try {
        return async ( dispatch, getState ) => {
            const { uid } = getState().auth;
            const noteRef = doc( FirestoreDB, `${uid}/journal/notes/${id}` );
            const resp = await deleteDoc( noteRef );
            console.log(resp);
            dispatch( deleteNote( id ) ) 
        }
    } catch (error) {
        console.log(error);
    }
}