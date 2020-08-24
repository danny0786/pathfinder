var firebaseConfig = {
    apiKey: "AIzaSyDkqcHcnV20S-atZAqvYE4bl5QHzGMjTZQ",
    authDomain: "website-8c0be.firebaseapp.com",
    databaseURL: "https://website-8c0be.firebaseio.com",
    projectId: "website-8c0be",
    storageBucket: "website-8c0be.appspot.com",
    messagingSenderId: "468409652832",
    appId: "1:468409652832:web:bfcf7b40db3132094a5505",
    measurementId: "G-ZJ5V3LTMWV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('comments1');

// Listen for form submit
document.getElementById('commentsform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var comment = getInputVal('comment');


  // Save message
  saveMessage(name, comment);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('commentsform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, comment){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    comment:comment

  });
}
