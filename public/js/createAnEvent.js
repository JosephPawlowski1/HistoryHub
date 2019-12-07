
$("#createAnEvent").click(function () {
  //alert("Handler for .click() called.");
  document.location.href = 'createAnEvent.html';
});



$("#createEventBTN").click(function (){
  // alert("btn Clicked");
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
  //alert("before firebase intitalizeApp")
  //alert(firebase.app.length)
  if (!firebase.apps.length) {
    //alert("in if statement")
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  //alert("after firevase intitalizeApp")
  var name2 = $("input#name").val();
  var location2 = $("input#location").val();
  var time2 = $("input#time").val();
  var description2 = $("textarea#description").val();
  //alert(name2);
  //alert(location2);
  //alert(time2);
  //alert(description2);
  //alert("firebase refereance")
  var dbRef2 = firebase.database();
  var eventsRef2 = dbRef2.ref('events');
 //alert("after database referance")
 //alert(dbRef2)
 //alert(eventsRef2)
  var data2 = {
    name: name2,
    location: location2,
    time: time2,
    description: description2
  }
  //alert("about to push")
  //alert(data2.name)
  eventsRef2.push(data2,finished);
  //alert("after push")
  function finished(error) {
    alert(error)
    if (error) {
    //  alert("error")
      alert(error)
      console.log('ooops');
    } else {
      //alert("data saved")
      console.log('data saved!');
    }
  }
});