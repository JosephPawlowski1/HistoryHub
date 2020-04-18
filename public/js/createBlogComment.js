$("#writeCommentBTN").on("click", function(event) {

    var key = sessionStorage.getItem("blogKey");
    //alert('key' + key);
    var array = key.split(",");
    var learnMoreNum = sessionStorage.getItem("learnMoreNum");
    var num = Number(learnMoreNum);
    //alert('num' + num);
    var eventGetOneRef = dbRef.ref("blog/" + array[num] + "/comments/");
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
    document.location.href = "blog-home-1.html";
  });
  