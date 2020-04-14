
window.onload = function() {
    var key = sessionStorage.getItem("blogKey");
    var learnMoreNum = sessionStorage.getItem("learnMoreNum");
    var array = key.split(",");
    var num = Number(learnMoreNum);
    alert(num);
    var blogGetOneRef = dbRef.ref("blog/" + array[num]);
  
    blogGetOneRef.on("value", gotData);
    function gotData(data) {
      var blogHeader = document.getElementById("blogBodyTitle");
      var blogBodyIntro = document.getElementById("blogBodyIntrod");
      var blogBodyDes = document.getElementById("blogBodyDes");
      var event = data.val();
      blogHeader.innerHTML = event.name;
      alert(event.name);
      blogBodyIntro.innerHTML = event.introduction;
      blogBodyDes.innerHTML = event.description;
    }
  
    var blogCommentGetRef = dbRef.ref("blog/" + array[num] + "/comments/");
    blogCommentGetRef.on("value", gotCommentData);
    var blogCommentsObjs = [];
    function gotCommentData(dataComment) {
      var blogComments = dataComment.val();
      console.log(blogComments);
  
      blogCommentsKeys = Object.keys(blogComments);
      alert(blogCommentsKeys);
      sessionStorage.setItem("blogCommentKeys", blogCommentsKeys);
  
      for (var i = 0; i < blogCommentsKeys.length; i++) {
        console.log(blogCommentsKeys[i]);
        var key = blogCommentsKeys[i];
        var blogComment = blogComments[key].comment;
        console.log(blogComment.email);
        console.log(blogComment.text);
        console.log(blogComment.postTime);
  
        var blogCommentObj = {
          email: blogComment.email,
          text: blogComment.text,
          postTime: blogComment.postTime
        }
        //    console.log(blogCommentObj);
  
        blogCommentsObjs.push(blogCommentObj);
        console.log(blogCommentsObjs);
      }
  
  
    
        let commentContainer;
        var counter = 0;
  
        let createTaskCard = blogCommentsObjs => {
          let card = document.createElement("div");
          card.blogName = "media mb-4";
          card.id = counter;
  
          let cardImg = document.createElement("img");
          cardImg.blogName = "d-flex mr-3 rounded-circle";
          cardImg.src = "imgs/funny.gif";
          cardImg.width = "100";
          cardImg.height = "100";
          cardImg.alt = "";
  
          let cardBasket = document.createElement("div");
          cardBasket.blog = "media-body";
  
          let cardHeader = document.createElement("h5");
          cardHeader.blogName = "mt-0";
          cardHeader.innerHTML = blogCommentsObjs.email;
  
          let cardBody = document.createElement("a");
          cardBody.innerHTML = blogCommentsObjs.text;
  
          cardBasket.appendChild(cardHeader);
          cardBasket.appendChild(cardBody);
          card.appendChild(cardImg);
          card.appendChild(cardBasket);
          console.log(card);
          console.log(commentContainer);
          commentContainer.appendChild(card);
          counter++;
        };
        let initListOfTasks = () => {
          if (commentContainer) {
            document.getElementById("card-container").replaceWith(card);
            return;
          }
          commentContainer = document.getElementById("card-container");
          blogCommentsObjs.forEach(blogCommentObjs => {
            createTaskCard(blogCommentObjs);
          });
        };
  
        initListOfTasks();
      }
    }
  
    $("#deleteBlogBTN").on("click", function(event) {
  
      blogKeys = sessionStorage.getItem("blogKey");
      var learnMoreNum = sessionStorage.getItem("learnMoreNum");
      var array = blogKeys.split(",");
      var num = Number(learnMoreNum);
      var blogGetOneRefDelete = dbRef.ref("blog/" + array[num]);
      blogGetOneRefDelete.remove();
      document.location.href = "blog-home-1.html";
    });
  
  