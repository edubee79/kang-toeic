const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDj4B-bqGuXiJMEnlnokOUynESTK0eWY98",
    authDomain: "kangs-toeic.firebaseapp.com",
    projectId: "kangs-toeic",
    storageBucket: "kangs-toeic.firebasestorage.app",
    messagingSenderId: "259666973446",
    appId: "1:259666973446:web:dead990eae3a8bd75cc487"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function findUser() {
    const q = query(collection(db, "Winter_Users"), where("username", "==", "eduthot"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        console.log("User 'eduthot' not found.");
    } else {
        const doc = querySnapshot.docs[0];
        const user = { userId: doc.id, ...doc.data() };
        console.log("USER_DATA_START");
        console.log(JSON.stringify(user));
        console.log("USER_DATA_END");
    }
    process.exit(0);
}

findUser();
