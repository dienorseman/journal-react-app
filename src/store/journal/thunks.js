import { collection, doc, setDoc } from "firebase/firestore/lite";
import { addNewNote } from "./journalSlice"
import { FirestoreDB } from "../../firebase";


export const startNewNote = () => {
    try {
        return async ( dispatch, getState ) => {

            const { uid } = getState().auth;

            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
                imageUrls: null,
            }

            const newDoc = doc( collection(FirestoreDB, `${uid}/journal/notes`) );

            const setDocResp = await setDoc(newDoc, newNote);

            console.log({newDoc, setDocResp});

        }
    } catch (error) {
        console.log(error);
    }
} 