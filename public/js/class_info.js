var eventKey;
var classKeys;
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
    var dbRefClass = firebase.database();
  
    classKeys = sessionStorage.getItem("classKeys");
    var learnMoreNum = sessionStorage.getItem("learnMoreNum");
    var array = classKeys.split(",");
    var num = Number(learnMoreNum);
    var classGetOneRef = dbRefClass.ref('class/' + array[num]);
    alert(classGetOneRef);
    classGetOneRef.on("value", gotData);

    function gotData(data) {
      var classHeader = document.getElementById("classHeader");
      var classBodyLoc = document.getElementById("classBodyLoc");
      var classBodyTime = document.getElementById("classBodyTime");
      var classBodyDes = document.getElementById("classBodyDes");
      var clas = data.val();
      
      classHeader.innerHTML = clas.name;

      classBodyLoc.innerHTML = clas.location;
      classBodyTime.innerHTML = clas.time;
      classBodyDes.innerHTML = clas.description;
    }
  }
  
  
  
  $("#deleteClassBTN").on("click", function (event) {
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
    var dbRefDeleteClass = firebase.database();
    classKeys = sessionStorage.getItem("classKeys");
    var learnMoreNum = sessionStorage.getItem("learnMoreNum");
    var array = classKeys.split(",");
    var num = Number(learnMoreNum);
    var classGetOneRefDelete = dbRefDeleteClass.ref('class/' + array[num]);
    classGetOneRefDelete.remove();
    document.location.href = 'class.html';
  
  
  
  });
