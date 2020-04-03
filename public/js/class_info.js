var eventKey;
var classKeys;
window.onload = function() {
     
    classKeys = sessionStorage.getItem("classKeys");
    var learnMoreNum = sessionStorage.getItem("learnMoreNum");
    var array = classKeys.split(",");
    var num = Number(learnMoreNum);
    var classGetOneRef = dbRef.ref('class/' + array[num]);
    //alert(classGetOneRef);
    classGetOneRef.on("value", gotData);

    function gotData(data) {
      var classHeader = document.getElementById("classHeader");
      var classBodyLoc = document.getElementById("classBodyLoc");
      var classBodyTime = document.getElementById("classBodyTime");
      var classBodyDes = document.getElementById("classBodyDes");
      var clas = data.val();
      
      classHeader.innerHTML = clas.name;

      classBodyLoc.innerHTML = clas.location;
      classBodyTime.innerHTML = clas.time;
      classBodyDes.innerHTML = clas.description;
    }
  
  
  var classCommentGetRef = dbRef.ref('class/' + array[num] + '/comments/' );
  classCommentGetRef.on("value",gotCommentData);
  var classCommentsObjs = [];
  function gotCommentData(dataComment){
 
    var classComments = dataComment.val();
    console.log(classComments);

    classCommentsKeys = Object.keys(classComments);

    sessionStorage.setItem("classCommentKeys",classCommentsKeys);
 
    for(var i = 0; i < classCommentsKeys.length; i++){
      console.log(classCommentsKeys[i]);
      var key = classCommentsKeys[i];
      var classComment = classComments[key].comment;
      console.log(classComment.email);
      console.log(classComment.text);
      console.log(classComment.postTime);
      
      var classCommentObj = {
        "email": classComment.email,
        "text" : classComment.text,
        "postTime" : classComment.postTime
      };
      console.log(classCommentObj);
      classCommentsObjs.push(classCommentObj);
      console.log(classCommentsObjs)
    }
  
  
 
  let commentContainer;
  var counter =0;

  let createTaskCard = (classCommentsObjs) =>{

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
    cardHeader.innerHTML = classCommentsObjs.email;

    let cardBody = document.createElement('a');
    cardBody.innerHTML = classCommentsObjs.text;

    cardBasket.appendChild(cardHeader);
    cardBasket.appendChild(cardBody);
    card.appendChild(cardImg);
    card.appendChild(cardBasket);
    console.log(card);
    console.log(commentContainer);
    commentContainer.appendChild(card);
    counter++;

    
  }
  let initListOfTasks = () => {
    if(commentContainer){
      document.getElementById('card-container').replaceWith(card);
      return;
    }
    commentContainer = document.getElementById('card-container');
    classCommentsObjs.forEach((classCommentObjs)=> {
      createTaskCard(classCommentObjs);
    });
  };

  initListOfTasks();
  }

}
  $("#deleteClassBTN").on("click", function (event) {
 
  
    classKeys = sessionStorage.getItem("classKeys");
    var learnMoreNum = sessionStorage.getItem("learnMoreNum");
    var array = classKeys.split(",");
    var num = Number(learnMoreNum);
    var classGetOneRefDelete = dbRef.ref('class/' + array[num]);
    classGetOneRefDelete.remove();
    document.location.href = 'class.html';
  
  
  
  });
