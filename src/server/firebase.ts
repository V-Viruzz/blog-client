/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

interface EnvVariables {
  VITE_FIREBASE_API_KEY: string
  VITE_FIREBASE_PROJECT_ID: string
  VITE_FIREBASE_SENDER_ID: string
  VITE_FIREBASE_APP_ID: string
}

const { VITE_FIREBASE_API_KEY, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_SENDER_ID, VITE_FIREBASE_APP_ID } = import.meta.env || process.env.VITE_API_URL

if (!VITE_FIREBASE_API_KEY || !VITE_FIREBASE_PROJECT_ID || !VITE_FIREBASE_SENDER_ID || !VITE_FIREBASE_APP_ID) {
  throw new Error('One or more required environment variables are missing.')
}

const env: EnvVariables = {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_SENDER_ID,
  VITE_FIREBASE_APP_ID
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: `${env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: env.VITE_FIREBASE_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
