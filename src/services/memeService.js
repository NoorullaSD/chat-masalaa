import {
    collection,
    getDocs,
    updateDoc,
    doc,
    increment,
    query,
    where,
    orderBy
} from "firebase/firestore";
import { db } from "./firebase";

const memeRef = collection(db, "memes");

export const fetchMemes = async () => {
    const q = query(memeRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const fetchByCategory = async (category) => {
    const q = query(
        memeRef,
        where("category", "==", category),
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const likeMeme = async (id) => {
    const memeDoc = doc(db, "memes", id);
    await updateDoc(memeDoc, {
        likes: increment(1),
    });
};