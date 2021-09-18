// auth.tsx
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase } from '@client';

export type SignInProps = {
  appName: string;
  message: string;
};

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // GitHub as the only included Auth Provider.
  // You could add and configure more here!
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen({ appName, message }: SignInProps) {
  return (
    <div
      style={{
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1>{appName}</h1>
      <p>{message}</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
