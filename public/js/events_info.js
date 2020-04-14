var eventKeys;
var eventKey;
window.onload = function() {

  var key = sessionStorage.getItem("eventKeys");
  var learnMoreNum = sessionStorage.getItem("learnMoreNum");
  var array = key.split(",");
  var num = Number(learnMoreNum);
  var eventGetOneRef = dbRef.ref('events/' + array[num]);
  
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

  var eventCommentGetRef = dbRef.ref('events/' + array[num] + '/comments/' );
  eventCommentGetRef.on("value",gotCommentData);
  var eventCommentsObjs = [];
  function gotCommentData(dataComment){
 
    var eventComments = dataComment.val();
    console.log(eventComments);

    eventCommentsKeys = Object.keys(eventComments);

    sessionStorage.setItem("eventCommentKeys",eventCommentsKeys);
 
    for(var i = 0; i < eventCommentsKeys.length; i++){
      console.log(eventCommentsKeys[i]);
      var key = eventCommentsKeys[i];
      var eventComment = eventComments[key].comment;
      console.log(eventComment.email);
      console.log(eventComment.text);
      console.log(eventComment.postTime);
      
      var eventCommentObj = {
        "email": eventComment.email,
        "text" : eventComment.text,
        "postTime" : eventComment.postTime
      };
      console.log(eventCommentObj);
      eventCommentsObjs.push(eventCommentObj);
      console.log(eventCommentsObjs)
    }
  
  
 
  let commentContainer;
  var counter =0;

  let createTaskCard = (eventCommentsObjs) =>{

    let card = document.createElement('div');
    card.className = 'media mb-4';
    card.id = counter;
    
    let cardImg = document.createElement('img');
    cardImg.className = 'd-flex mr-3 rounded-circle';
    cardImg.src = 'imgs/funny.gif';
    cardImg.width = '100';
    cardImg.height = '100';
    cardImg.alt = '';

    let cardBasket = document.createElement('div');
    cardBasket.class = 'media-body';

    let cardHeader = document.createElement('h5');
    cardHeader.className = 'mt-0';
    cardHeader.innerHTML = eventCommentsObjs.email;

    let cardBody = document.createElement('a');
    cardBody.innerHTML = eventCommentsObjs.text;

    cardBasket.appendChild(cardHeader);
    cardBasket.appendChild(cardBody);
    card.appendChild(cardImg);
    card.appendChild(cardBasket);
    commentContainer.appendChild(card);
    counter++;

    
  }
  let initListOfTasks = () => {
    if(commentContainer){
      document.getElementById('card-container').replaceWith(commentContainer);
      return;
    }
    commentContainer = document.getElementById('card-container');
    eventCommentsObjs.forEach((eventCommentObjs)=> {
      createTaskCard(eventCommentObjs);
    });
  };

  initListOfTasks();
  }
}

$("commentEventBTN").on("click", function (event){
  alert("GOT HERE");
  document.location.href = 'createEventComment.html';
 
});

$("#deleteEvenBTN").on("click", function (event) {
  
  var key = sessionStorage.getItem("eventKeys");
  var learnMoreNum = sessionStorage.getItem("learnMoreNum");
  var array = key.split(",");
  var num = Number(learnMoreNum);
  var eventGetOneRefDelete = dbRef.ref('events/' + array[num]);
  eventGetOneRefDelete.remove();
  document.location.href = 'events.html';



});