import { collection, getDocs } from "firebase/firestore/lite";
import { FirestoreDB } from "../firebase";

export const loadNotes = async ( uid = '' ) => {
    const collectionRef = await collection( FirestoreDB, `${uid}/journal/notes` )

    const docs = await getDocs(collectionRef);


    const notes = [];

    docs.forEach( doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    }
    )

    return notes;
    
}