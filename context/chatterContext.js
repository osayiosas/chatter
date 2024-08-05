import { createContext, useEffect, useState, ReactNode } from "react";
import {
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";


const ChatterContext = createContext()


const ChatterProvider = ({ children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));

            querySnapshot.docs.map(doc => console.log(doc))
        }
    }, [])

    return (
        <ChatterContext.Provider value={{ posts, users }}>
            {children}
        </ChatterContext.Provider>
    )

}


export { ChatterContext, ChatterProvider };
