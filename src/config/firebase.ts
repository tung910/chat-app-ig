// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDWG2UfI-emkwdPRUYCLktDWM04iTN12Ik',
	authDomain: 'chat-ig-clone.firebaseapp.com',
	projectId: 'chat-ig-clone',
	storageBucket: 'chat-ig-clone.appspot.com',
	messagingSenderId: '439837951446',
	appId: '1:439837951446:web:e80fae3ab479be803e1077',
	measurementId: 'G-GXC9R7T987',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export default auth;
export { provider, db, analytics };
