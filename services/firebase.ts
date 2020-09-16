import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseUrl: process.env.firebaseDatabaseUrl,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebaseMeasurementId,
};

export const firebaseApp = firebase.apps.length
  ? firebase.apps[0]
  : firebase.initializeApp(firebaseConfig);
