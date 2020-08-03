console.log("Hello");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyChnprlbhRvRRDR6aE1GGBUuHfSgG9p3YI",
  authDomain: "feedbackform-520c3.firebaseapp.com",
  databaseURL: "https://feedbackform-520c3.firebaseio.com",
  projectId: "feedbackform-520c3",
  storageBucket: "feedbackform-520c3.appspot.com",
  messagingSenderId: "398320254259",
  appId: "1:398320254259:web:e7317294f5cf0e33cb9246",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log(firebase.database());

document.getElementsByClassName("formBtn")[0].addEventListener("click", (e) => {
  e.preventDefault();
  var name = e.target.parentNode.parentNode.getElementsByTagName("input")[0]
    .value;
  var email = e.target.parentNode.parentNode.getElementsByTagName("input")[1]
    .value;
  var phone = e.target.parentNode.parentNode.getElementsByTagName("input")[2]
    .value;
  var subject = e.target.parentNode.parentNode.getElementsByTagName("input")[3]
    .value;
  var message = e.target.parentNode.parentNode.getElementsByTagName(
    "textarea"
  )[0].value;

  if (validatefields()) {
    var timestamp = Date.now();
    firebase
      .database()
      .ref(timestamp + "/")
      .set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      });
    window.alert("We will connect with you shortly");
    resetFields(e);
  }
});

function resetFields(e) {
  e.target.parentNode.parentNode.getElementsByTagName("input")[0].value = "";
  e.target.parentNode.parentNode.getElementsByTagName("input")[1].value = "";
  e.target.parentNode.parentNode.getElementsByTagName("input")[2].value = "";
  e.target.parentNode.parentNode.getElementsByTagName("input")[3].value = "";
  e.target.parentNode.parentNode.getElementsByTagName("textarea")[0].value = "";
}

function validatefields() {
  var name = document.getElementById("enquiryname").value;
  var email = document.getElementById("enquiryemail").value;
  var phone = document.getElementById("enquiryphone").value;
  var subject = document.getElementById("enquirysubject").value;
  var message = document.getElementById("enquirymessage").value;

  if (
    name == "" ||
    email == "" ||
    subject == "" ||
    message == "" ||
    phone == ""
  ) {
    alert("Please fill all the fields");
  } else {
    return true;
  }
}
// Subscribe Email Code
document.getElementsByTagName("input")[1].addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Till here");
  console.log(e.target.parentNode.childNodes[1].value);
  emailsubscription = e.target.parentNode.childNodes[1].value;
  if (emailsubscription.length > 0) {
    var timestamp = Date.now();
    firebase
      .database()
      .ref(timestamp + "/subscription/")
      .set({
        emailsubscription: emailsubscription,
      });
    e.target.parentNode.childNodes[1].value = "";

    alert("You have been subscribed to our mailing list");
  } else {
    alert("Please provide a valid email");
  }
});
