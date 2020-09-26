import firebase from 'firebase/app';
import env from './env';

const firebaseConfig = {
  apiKey: env.firebaseApiKey,
  authDomain: env.firebaseAuthDomain,
  databaseUrl: env.firebaseDatabaseUrl,
  projectId: env.firebaseProjectId,
  storageBucket: env.firebaseStorageBucket,
  messagingSenderId: env.firebaseMessagingSenderId,
  appId: env.firebaseAppId,
  measurementId: env.firebaseMeasurementId,
};

export const firebaseApp = firebase.apps.length
  ? firebase.apps[0]
  : firebase.initializeApp(firebaseConfig);
