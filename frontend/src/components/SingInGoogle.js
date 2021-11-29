// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyD2-NMSx6baN_kkuTQE2J7Gjk8b8a8rTiI",
    authDomain: "g3b43-calculadora-liquidacion.firebaseapp.com",
    projectId: "g3b43-calculadora-liquidacion",
    storageBucket: "g3b43-calculadora-liquidacion.appspot.com",
    messagingSenderId: "257123015768",
    appId: "1:257123015768:web:761a625d6011e7951afe2d",
    measurementId: "G-H78C1LYZTM"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/profile',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: (authResult) => {
            const objeto = {
                name: authResult.user.displayName,
                email: authResult.user.email,
                img: authResult.user.photoURL,
                id: authResult.user.uid,
                isNew: authResult.additionalUserInfo.isNewUser,
            }
            localStorage.setItem('session', JSON.stringify(objeto));
            return true;
            /* console.log(authResult); */
        },

    },
};

function SingInGoogle() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
}

export default SingInGoogle