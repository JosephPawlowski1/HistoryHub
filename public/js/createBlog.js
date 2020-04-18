function setup() {
  const firebaseConfig = {
    apiKey: "AIzaSyA7zxrx4StJObT7CfXMsCzKGCpbfSKnOZs",
    authDomain: "historyunited-61508.firebaseapp.com",
    databaseURL: "https://historyunited-61508.firebaseio.com",
    projectId: "historyunited-61508",
    storageBucket: "historyunited-61508.appspot.com",
    messagingSenderId: "752721294693",
    appId: "1:752721294693:web:116701c67ce46f49859d8c",
    measurementId: "G-5GP36786WK",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.analytics();

  var dbRef = firebase.database();
  var dbRef = firebase.database();
  var dbRef = firebase.database();
  var blogRef = dbRef.ref("blog");
  blogRef.on("value", gotData);

  function gotData(data) {
    var blogs = data.val();
    var keys = Object.keys(blogRef);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      var blogX = blogs[key];
    }
  }
}
$("#createBlog").click(function() {
  document.location.href = "blog-home-1.html";
});

$("#createBlogBTN").click(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyA7zxrx4StJObT7CfXMsCzKGCpbfSKnOZs",
    authDomain: "historyunited-61508.firebaseapp.com",
    databaseURL: "https://historyunited-61508.firebaseio.com",
    projectId: "historyunited-61508",
    storageBucket: "historyunited-61508.appspot.com",
    messagingSenderId: "752721294693",
    appId: "1:752721294693:web:116701c67ce46f49859d8c",
    measurementId: "G-5GP36786WK",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  var name2 = $("input#name").val();
  var introduction2 = $("input#introduction").val();
  var description2 = $("textarea#description").val();
  var author2 = $("input#author").val();

  var dbRef2 = firebase.database();
  //alert(dbRef2);
  var blogRef2 = dbRef2.ref("blog");

  var data2 = {
    name: name2,
    introduction: introduction2,
    author: author2,
    description: description2,
  };

  blogRef2.push(data2, finished);

  function finished(error) {
    if (error) {
      alert(error);
      console.log("ooops");
    } else {
      console.log("data saved!");
    }
  }
  document.location.href = "blog-home-1.html";
});
