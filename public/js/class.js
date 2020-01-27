var eventKey;
var keys;
function setup() {

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
    firebase.analytics();
  }

  firebase.analytics();

  var dbRef3 = firebase.database();

  var classGetRef = dbRef3.ref("classes");

  classGetRef.on("value", gotData);



  var classObjs = [];
  function gotData(data) {

    var classes = data.val();
    keys = Object.keys(classGetRef);
    sessionStorage.setItem("keys", keys);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      var clas = classes[key];

      var classObj = {
        "name": clas.name,
        "time": clas.time,
        "location": clas.location,
        "description": clas.description
      };

      classObjs.push(classObj);
    }

    sessionStorage.setItem("key1", keys[0]);
    sessionStorage.setItem("key2", keys[1]);
    sessionStorage.setItem("key3", keys[2]);

    let cardContainer;
    var counter = 0;
    let createTaskCard = (eventObjs) => {


      let card = document.createElement('div');
      card.className = 'col-lg-4 mb-4';

      let cardHeader = document.createElement('div');
      cardHeader.className = 'card h-100';

      let cardHeaderInner = document.createElement('h4');
      cardHeaderInner.className = 'card-header'
      cardHeaderInner.innerHTML = classObjs.name;


      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      let cardBodyInner = document.createElement('p');
      cardBodyInner.className = 'card-text';
      cardBodyInner.innerHTML = "Location: " + classObjs.location;

      let cardBodyInner2 = document.createElement('p');
      cardBodyInner2.className = 'card-text';
      cardBodyInner2.innerHTML = "Time: " + classObjs.time;


      let cardFooter = document.createElement('div');
      cardFooter.className = 'card-footer';

      let cardFooterInner = document.createElement('a');
      cardFooterInner.id = counter;
      cardFooterInner.className = 'btn btn-primary';
      cardFooterInner.innerHTML = 'Learn More';
      cardFooterInner.href = '#';



      cardHeader.appendChild(cardHeaderInner);
      cardBodyInner.appendChild(cardBodyInner2);
      cardBody.appendChild(cardBodyInner);
      cardFooter.appendChild(cardFooterInner);
      cardHeader.appendChild(cardBody);
      cardHeader.appendChild(cardFooter);
      card.appendChild(cardHeader);
      cardContainer.appendChild(card);
      counter++

    }

    let initListOfTasks = () => {
      if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
      }

      cardContainer = document.getElementById('card-container');
      classObjs.forEach((classObjs) => {
        createTaskCard(classObjs);
      });
    };

    initListOfTasks();
  }
}