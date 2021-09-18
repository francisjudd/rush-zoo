import firebase from 'firebase/app';
import 'firebase/auth';

const clientCredentials = {
  apiKey: 'AIzaSyByRkadV2xOmI0JGq-9Ky8HVhlfCK_B3PI',
  authDomain: 'nfl-nft-game.firebaseapp.com',
  projectId: 'nfl-nft-game',
  storageBucket: 'nfl-nft-game.appspot.com',
  messagingSenderId: '971603543789',
  appId: '1:971603543789:web:36eaca5345d39662192ee4',
  measurementId: 'G-JPCH9J9FCX',
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export { firebase };
