import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { Category } from '../types/Category'

const firebaseConfig = {
  apiKey: 'AIzaSyCjwn7Rrqe5Q1eiUMYlpPwP1nDBJj28AvI',
  authDomain: 'ecomerce-website-db.firebaseapp.com',
  projectId: 'ecomerce-website-db',
  storageBucket: 'ecomerce-website-db.appspot.com',
  messagingSenderId: '840716222401',
  appId: '1:840716222401:web:2388de9b0752975bd0b940',
}

initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return
  return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const db = getFirestore()

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase())
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserProfileDocument = async (
  userAuth: User,
  additionalInformation: AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return

  const userRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('Error creating user', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return createUserWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangeListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const categoriesRef = collection(db, 'categories')
  const q = query(categoriesRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data() as Category)
}
