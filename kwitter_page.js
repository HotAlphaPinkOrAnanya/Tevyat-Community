// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD78aHZlfitw8wTl6_i8lG7Go5dEURjE8w",
    authDomain: "tevyat-community.firebaseapp.com",
    databaseURL: "https://tevyat-community-default-rtdb.firebaseio.com",
    projectId: "tevyat-community",
    storageBucket: "tevyat-community.appspot.com",
    messagingSenderId: "282902396771",
    appId: "1:282902396771:web:2312438f5f5ccc93d4dd56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name " + room_name);
console.log("user name " + user_name);

function logout() {
    localStorage.removeItem("Roomname");
    localStorage.removeItem("Username");
    window.location.replace("index.html");
}

function send() {
    msg = document.getElementById("msg").value;
    console.log("Message " + msg);
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0,
        dislike: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();