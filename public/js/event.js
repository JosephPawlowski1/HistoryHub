

function setup() {

  var login = sessionStorage.getItem("login");
  if(login == 1)
  {
    document.getElementById('createAnEvent').hide;
  }
  

  var eventsGetRef = dbRef.ref("events");

  eventsGetRef.on("value", gotData);

  var eventObjs = [];
  function gotData(data) {

    var events = data.val();
    eventKeys = Object.keys(events);
    sessionStorage.setItem("eventKeys", eventKeys);

    for (var i = 0; i < eventKeys.length; i++) {
      var key = eventKeys[i];

      var event = events[key];

      var eventObj = {
        "name": event.name,
        "time": event.time,
        "location": event.location,
        "description": event.description
      };

      eventObjs.push(eventObj);
    }



    let cardContainer;
    var counter = 0;
    let createTaskCard = (eventObjs) => {


      let card = document.createElement('div');
      card.className = 'col-lg-4 mb-4';

      let cardHeader = document.createElement('div');
      cardHeader.className = 'card h-100';

      let cardHeaderInner = document.createElement('h4');
      cardHeaderInner.className = 'card-header'
      cardHeaderInner.innerHTML = eventObjs.name;


      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      let cardBodyInner = document.createElement('p');
      cardBodyInner.className = 'card-text';
      cardBodyInner.innerHTML = "Location: " + eventObjs.location;

      let cardBodyInner2 = document.createElement('p');
      cardBodyInner2.className = 'card-text';
      cardBodyInner2.innerHTML = "Time: " + eventObjs.time;


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
      eventObjs.forEach((eventObjs) => {
        createTaskCard(eventObjs);
      });
    };

    initListOfTasks();
  }
}