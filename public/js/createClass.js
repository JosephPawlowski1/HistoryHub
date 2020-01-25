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
    }

    firebase.analytics();

    var dbRef = firebase.database();
    var dbRef = firebase.database();
    var classRef = dbRef.ref('class');
    Ref.on("value", gotData);


    function gotData(data) {
        var classes = data.val();
        var keys = Object.keys(classRef);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            var classX = classes[key];

        }
    }
}
$("#createClass").click(function () {

    document.location.href = 'class.html';
});

$("#createClassBTN").click(function () {

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

    var name2 = $("input#name").val();
    var location2 = $("input#location").val();
    var time2 = $("input#time").val();
    var description2 = $("textarea#description").val();

    var dbRef2 = firebase.database();
    var classRef2 = dbRef2.ref('class');

    var data2 = {
        name: name2,
        location: location2,
        time: time2,
        description: description2
    }

    classRef2.push(data2, finished);

    function finished(error) {

        if (error) {

            alert(error)
            console.log('ooops');
        } else {
            console.log('data saved!');

        }
    }
    document.location.href = 'class.html';

});

