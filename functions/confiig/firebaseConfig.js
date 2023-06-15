 const { initializeApp } = require("firebase/app");
 const { getStorage } = require("firebase/storage");

 export const firebaseConfig = {
  apiKey: "AIzaSyDzMPAVJuILrB0wzp6NO3mWzmhYK8SRu3E",
  authDomain: "nodefileupload-49c8f.firebaseapp.com",
  projectId: "nodefileupload-49c8f",
  storageBucket: "nodefileupload-49c8f.appspot.com",
  messagingSenderId: "281353421278",
  appId: "1:281353421278:web:452bc08f28b9ae2dd8dd4f",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = { storage };