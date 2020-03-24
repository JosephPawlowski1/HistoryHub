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