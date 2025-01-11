import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const useDocument = (docPath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const firestore = getFirestore();
      const docRef = doc(firestore, docPath);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.error("No document found");
      }
      setLoading(false);
    };

    fetchData();
  }, [docPath]);

  return { data, loading };
};
