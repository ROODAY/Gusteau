import { Firebase as FirebaseSuper } from "upe-react-components";

const config = {
  apiKey: "AIzaSyCpgZeSyO2Aa4wXhSpbHh6Hhdl2kQgsWSY",
  authDomain: "gusteau-b9361.firebaseapp.com",
  projectId: "gusteau-b9361",
  storageBucket: "gusteau-b9361.appspot.com",
  messagingSenderId: "1041783552412",
  appId: "1:1041783552412:web:627ef2a4bc6770ebc5f059",
  measurementId: "G-133DHWHX7G"
};

class Firebase extends FirebaseSuper {
  constructor(firebaseApp) {
    const app = firebaseApp.default;
    super(app, config);
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleProvider);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });
}

export default Firebase;
