import { getDatabase, ref, get, child } from "firebase/database";

const read = async (path = "/") => {
  const database = getDatabase(app);
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, path)); // 'users' is the path
    if (snapshot.exists()) {
      console.log("All Data:", snapshot.val());
    } else {
      console.log("No data found");

    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    console.error("process error occure")
  }
};
export default read;
