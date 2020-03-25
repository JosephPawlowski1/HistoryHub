$("#writeCommentBTN").on("click", function(event) {
  var key = sessionStorage.getItem("classKeys");
  var array = key.split(",");
  var learnMoreNum = sessionStorage.getItem("learnMoreNum");
  var num = Number(learnMoreNum);
  var eventGetOneRef = dbRef.ref("class/" + array[num] + "/comments/");
  var comment = $("textarea#comment").val();
  var loginEmail = sessionStorage.getItem("loginEmail");
  var today = new Date();
  var time =
    today.getFullYear() +
    "" +
    today.getHours() +
    "" +
    today.getMinutes() +
    "" +
    today.getSeconds();
  var data = {
    comment: {
      email: loginEmail,
      text: comment,
      postTime: time
    }
  };

  eventGetOneRef.push(data, finished);
  function finished(error) {
    if (error) {
      alert(error);
      console.log("ooops");
    } else {
      console.log("data saved!");
    }
  }
});
