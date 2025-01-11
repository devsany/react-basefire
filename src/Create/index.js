import { collection, getFirestore, addDoc } from "firebase/firestore";

const create = async (path, value) => {
  try {
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, { path }), value);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default create;
