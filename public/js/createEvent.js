


    function gotData(data) {
        var events = data.val();
        var keys = Object.keys(events);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            var event = events[key];

        }
    }
$("#createAnEvent").click(function () {

    document.location.href = 'createAnEvent.html';
});

$("#createEventBTN").click(function () {

    
    var eventsRef = dbRef.ref('events');
    eventsRef.on("value", gotData);

    var name2 = $("input#name").val();
    var location2 = $("input#location").val();
    var time2 = $("input#time").val();
    var description2 = $("textarea#description").val();

    var dbRef2 = firebase.database();
    var eventsRef2 = dbRef2.ref('events');

    var data2 = {
        name: name2,
        location: location2,
        time: time2,
        description: description2
    }

      // make auth and firestore references
      const auth = firebase.auth();
      const db = firebase.firestore();

    eventsRef2.push(data2, finished);

    function finished(error) {

        if (error) {

            alert(error)
            console.log('ooops');
        } else {
            console.log('data saved!');

        }
    }
    document.location.href = 'events.html';

});

