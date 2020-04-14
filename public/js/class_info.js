<<<<<<< Updated upstream
//This code allows users to be able to read and/or post information about a class

var eventKey;
var classKeys;
=======
<<<<<<< HEAD

=======
//This code allows users to be able to read and/or post information about a class

var eventKey;
var classKeys;
>>>>>>> tommysBranch
>>>>>>> Stashed changes
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
