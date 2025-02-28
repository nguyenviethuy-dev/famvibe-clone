

// import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
// import {
//   type User,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   signInWithPopup,
// } from "firebase/auth"
// import { auth } from "@/services/firebaseConfig1"
// import { useToast } from "@/components/ui/use-toast"

// interface AuthContextType {
//   user: User | null
//   loading: boolean
//   signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
//   signIn: (email: string, password: string) => Promise<void>
//   logOut: () => Promise<void>
//   resetPassword: (email: string) => Promise<void>
//   signInWithGoogle: () => Promise<void>
//   signInWithFacebook: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | null>(null)

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)
//   const { toast } = useToast()

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)
//       setLoading(false)
//     })

//     return () => unsubscribe()
//   }, [])

//   const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//       // Here you could store additional user data in Firestore
//       // For example: await setDoc(doc(db, "users", userCredential.user.uid), { firstName, lastName });
//       toast({
//         title: "Account created",
//         description: "Your account has been created successfully",
//       })
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error creating account",
//         description: error.message,
//       })
//       throw error
//     }
//   }

//   const signIn = async (email: string, password: string) => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password)
//       toast({
//         title: "Welcome back",
//         description: "You have successfully logged in",
//       })
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Login failed",
//         description: error.message,
//       })
//       throw error
//     }
//   }

//   const logOut = async () => {
//     try {
//       await signOut(auth)
//       toast({
//         title: "Logged out",
//         description: "You have been logged out successfully",
//       })
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error logging out",
//         description: error.message,
//       })
//       throw error
//     }
//   }

//   const resetPassword = async (email: string) => {
//     try {
//       await sendPasswordResetEmail(auth, email)
//       toast({
//         title: "Password reset email sent",
//         description: "Check your email for password reset instructions",
//       })
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error sending reset email",
//         description: error.message,
//       })
//       throw error
//     }
//   }

//   const signInWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider()
//       const result = await signInWithPopup(auth, provider)
//       toast({
//         title: "Welcome",
//         description: "You have successfully logged in with Google",
//       })
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Google login failed",
//         description: error.message,
//       })
//       throw error
//     }
//   }

//   const signInWithFacebook = async () => {
//     try {
//       const provider = new FacebookAuthProvider()
//       const result = await signInWithPopup(auth, provider)
//       toast({
//         title: "Welcome",
//         description: "You have successfully logged in with Facebook",
//       })
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Facebook login failed",
//         description: error.message,
//       })
//       throw error
//     }
//   }

//   const value = {
//     user,
//     loading,
//     signUp,
//     signIn,
//     logOut,
//     resetPassword,
//     signInWithGoogle,
//     signInWithFacebook,
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }


import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "@/services/firebaseConfig1"
import { useToast } from "@/components/ui/use-toast"

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithFacebook: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Here you could store additional user data in Firestore
      // For example: await setDoc(doc(db, "users", userCredential.user.uid), { firstName, lastName });
      toast({
        title: "Account created",
        description: "Your account has been created successfully",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error creating account",
        description: error.message,
      })
      throw error
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast({
        title: "Welcome back",
        description: "You have successfully logged in",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message,
      })
      throw error
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error logging out",
        description: error.message,
      })
      throw error
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
      toast({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error sending reset email",
        description: error.message,
      })
      throw error
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      toast({
        title: "Welcome",
        description: "You have successfully logged in with Google",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Google login failed",
        description: error.message,
      })
      throw error
    }
  }

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider()
      await signInWithPopup(auth, provider)
      toast({
        title: "Welcome",
        description: "You have successfully logged in with Facebook",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Facebook login failed",
        description: error.message,
      })
      throw error
    }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
    resetPassword,
    signInWithGoogle,
    signInWithFacebook,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

