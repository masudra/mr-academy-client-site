import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { useEffect } from "react";
import axios from "axios";

const auth = getAuth(app)

export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googlePovider = new GoogleAuthProvider();


    // User Create
    const creatUsr = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Update User
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    // const Google login 
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googlePovider)
    }

    // log Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
            if(currentuser){
                axios.post('https://mr-academy-server.vercel.app/jwt',{email: currentuser.email})
                .then(data =>{
                    // console.log(data.data.token);
                    localStorage.setItem('access-token',data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
                // setLoading(false)
            }

        })
        // setLoading(false)
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUsr,
        login,
        updateUser,
        googleLogIn,
        logOut

    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;