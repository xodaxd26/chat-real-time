import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCi16eiT9ygLW_BJLdQ9zKW6dfL0UY8fkw",
    authDomain: "chat-realtime-b4188.firebaseapp.com",
    databaseURL: "https://chat-realtime-b4188.firebaseio.com",
    projectId: "chat-realtime-b4188",
    storageBucket: "chat-realtime-b4188.appspot.com",
    messagingSenderId: "1008231570463",
    appId: "1:1008231570463:web:89a0697e57ea24ba0ec92a",
    measurementId: "G-GM8CTHC6LF"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
