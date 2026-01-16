import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
    query,
    orderBy,
    serverTimestamp
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface University {
    id: string;
    name: string;
    createdAt?: any;
}

const COLLECTION_NAME = "universities";

export const getUniversities = async (): Promise<University[]> => {
    const q = query(collection(db, COLLECTION_NAME), orderBy("name"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    } as University));
};

export const addUniversity = async (name: string) => {
    await addDoc(collection(db, COLLECTION_NAME), {
        name,
        createdAt: serverTimestamp(),
    });
};

export const updateUniversity = async (id: string, name: string) => {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, { name });
};

export const deleteUniversity = async (id: string) => {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
};
