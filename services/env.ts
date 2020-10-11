import { assertTruthyValues } from './services';

export type Env = {
  firebaseApiKey: string;
  firebaseAuthDomain: string;
  firebaseDatabaseUrl: string;
  firebaseProjectId: string;
  firebaseStorageBucket: string;
  firebaseMessagingSenderId: string;
  firebaseAppId: string;
  firebaseMeasurementId: string;
  origin: string;
  logRocketId?: string;
  mixpanelToken?: string;
};

const rawEnv: Partial<Env> = {
  firebaseApiKey: process.env.firebaseApiKey,
  firebaseAuthDomain: process.env.firebaseAuthDomain,
  firebaseDatabaseUrl: process.env.firebaseDatabaseUrl,
  firebaseProjectId: process.env.firebaseProjectId,
  firebaseStorageBucket: process.env.firebaseStorageBucket,
  firebaseMessagingSenderId: process.env.firebaseMessagingSenderId,
  firebaseAppId: process.env.firebaseAppId,
  firebaseMeasurementId: process.env.firebaseMeasurementId,
  origin: process.env.origin,
};

assertTruthyValues(rawEnv);

const env: Env = {
  ...rawEnv,
  logRocketId: process.env.logRocketId,
  mixpanelToken: process.env.mixpanelToken,
};

export default env;
