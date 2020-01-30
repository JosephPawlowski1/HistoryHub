var eventKeys;
var eventKey;
window.onload = function() {
  const firebaseConfig = {
    apiKey: "AIzaSyA7zxrx4StJObT7CfXMsCzKGCpbfSKnOZs",
    authDomain: "historyunited-61508.firebaseapp.com",
    databaseURL: "https://historyunited-61508.firebaseio.com",
    projectId: "historyunited-61508",
    storageBucket: "historyunited-61508.appspot.com",
    messagingSenderId: "752721294693",
    appId: "1:752721294693:web:116701c67ce46f49859d8c",
    measurementId: "G-5GP36786WK"
  };

  if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
  }
  firebase.analytics();
  var dbRefEvent = firebase.database();
  var key = sessionStorage.getItem("eventKeys");
  var learnMoreNum = sessionStorage.getItem("learnMoreNum");
  var array = key.split(",");
  var num = Number(learnMoreNum);
  var eventGetOneRef = dbRefEvent.ref('events/' + array[num]);
  
  eventGetOneRef.on("value", gotData);
  function gotData(data) {

    var eventHeader = document.getElementById("eventHeader");
    var eventBodyLoc = document.getElementById("eventBodyLoc");
    var eventBodyTime = document.getElementById("eventBodyTime");
    var eventBodyDes = document.getElementById("eventBodyDes");
    var event = data.val();
    eventHeader.innerHTML = event.name;
    eventBodyLoc.innerHTML = event.location;
    eventBodyTime.innerHTML = event.time;
    eventBodyDes.innerHTML = event.description;
  }
}



$("#deleteEvenBTN").on("click", function (event) {
  const firebaseConfig = {
    apiKey: "AIzaSyA7zxrx4StJObT7CfXMsCzKGCpbfSKnOZs",
    authDomain: "historyunited-61508.firebaseapp.com",
    databaseURL: "https://historyunited-61508.firebaseio.com",
    projectId: "historyunited-61508",
    storageBucket: "historyunited-61508.appspot.com",
    messagingSenderId: "752721294693",
    appId: "1:752721294693:web:116701c67ce46f49859d8c",
    measurementId: "G-5GP36786WK"
  };
  if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
  }
  var dbRefDeleteEvent = firebase.database();
  var key = sessionStorage.getItem("eventKeys");
  var learnMoreNum = sessionStorage.getItem("learnMoreNum");
  var array = key.split(",");
  var num = Number(learnMoreNum);
  var eventGetOneRefDelete = dbRefDeleteEvent.ref('events/' + array[num]);
  eventGetOneRefDelete.remove();
  document.location.href = 'events.html';



});