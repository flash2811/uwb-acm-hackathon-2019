console.log("yes");


var database = firebase.database();
var name = document.getElementById('name'),
    email = document.getElementById('email');
    imageUrl = document.getElementById('imageUrl');
function writeUserData(name, email, imageUrl) {
    firebase.database().ref('users/').set({
      image: name,
      name: email,
      userid: imageUrl
    });
    console.log("YesYes");
  }
