"use client";

import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState, ReactNode, FC } from "react";
import { db } from "../app/utils/firebaseConfig";

interface User {
  id: string;
  [key: string]: any;
}

interface Post {
  id: string;
  [key: string]: any;
}

interface ChatterContextType {
  users: User[];
  posts: Post[];
}

const ChatterContext = createContext<ChatterContextType | undefined>(undefined);

interface ChatterProviderProps {
  children: ReactNode;
}

const ChatterProvider: FC<ChatterProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.docs.map((doc) => console.log(doc.data()));
    };
  }, []);

  return (
    <ChatterContext.Provider value={{ posts, users }}>
      {children}
    </ChatterContext.Provider>
  );
};

export { ChatterContext, ChatterProvider };
