import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot } from 'firebase/firestore';

class Model {
  constructor() {
    this.initializeFirebase();
    this.db = getFirestore();
    this.usersColRef = collection(this.db, 'users');
    this.getCollection();
  }

  initializeFirebase = () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyA6nkQb38_XpzaL3JSOUdTnTMUzEnj_Y7s',
      authDomain: 'zajil-65fab.firebaseapp.com',
      projectId: 'zajil-65fab',
      storageBucket: 'zajil-65fab.appspot.com',
      messagingSenderId: '478540541412',
      appId: '1:478540541412:web:712c8ca79d43392ff6ebf1',
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  };

  getCollection() {
    const querySnapshot = getDocs(this.usersColRef);
    querySnapshot.then((snapshot) => {
      const users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log('users => ', users);
    });
  }

  addDocument(user) {
    addDoc(this.usersColRef, user);

    onSnapshot(this.usersColRef, (doc) => {
      console.log('Current data: ', doc);
    });
    /* this.getCollection(); */
  }
}

export default new Model();
