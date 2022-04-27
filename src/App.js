import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css';
import { useState } from 'react';


const auth = getAuth(app);


function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user
      console.log(user)
      setUser(user)
    })
    .catch(error => {
      console.error('error', error)
    })
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <p>name</p>
    </div>
  );
}

export default App;
