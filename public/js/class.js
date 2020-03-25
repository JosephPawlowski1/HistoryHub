var eventKey;
var classKeys;
window.onload = function() {

  var login = sessionStorage.getItem("login");
  if(login == 0)
  {
    document.getElementById('createClass').hide;
  }

  

  var classGetRef = dbRef.ref("class");

  
  classGetRef.on("value", gotData);



  var classObjs = [];
  function gotData(data) {

    var classes = data.val();
   
    classKeys = Object.keys(classes);
    sessionStorage.setItem("classKeys", classKeys);
   
    for (var i = 0; i < classKeys.length; i++) {

      var key = classKeys[i];

    
      var clas = classes[key];

      var classObj = {
        "name": clas.name,
        "time": clas.time,
        "location": clas.location,
        "description": clas.description
      };

      classObjs.push(classObj);
    }
   



    let cardContainer;
    var counter = 0;
    let createTaskCard = (classObjs) => {

    
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
      cardFooterInner.href = 'class-info.html';



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

