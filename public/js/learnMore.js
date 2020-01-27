//$( "#learnMore" ).click(function() {
  //  alert( "Handler for .click() called." );
    //document.location.href = "events-info.html";
    //sessionStorage.setItem("learnMoreNum", '1');
  //});
/*
  $( "#learnMore2" ).click(function() {
    alert( "Handler for .click() called." );
    document.location.href = 'events-info.html';
    sessionStorage.setItem("learnMoreNum", '2');
  });

  $( "#learnMore3" ).click(function() {
    alert( "Handler for .click() called." );
    document.location.href = 'events-info.html';
    sessionStorage.setItem("learnMoreNum", '3');
  });

  $( "#learnMore4" ).click(function() {
    alert( "Handler for .click() called." );
    document.location.href = 'events-info.html';
    sessionStorage.setItem("learnMoreNum", '4');
  });
*/

  $(document).on("click", function(event){
    if(event.target.id == 'createAnEvent'){
      document.location.href = 'createAnEvent.html';
    }else {
    document.location.href = 'events-info.html';
    event.target.id;
    sessionStorage.setItem("learnMoreNum",event.target.id);
    }

});
$(document).on("click", function(classes){
  if(classes.target.id == 'createAclass'){
    document.location.href = 'createAclass.html';
  }else {
  document.location.href = 'class-info.html';
  classes.target.id;
  sessionStorage.setItem("learnMoreNum",classes.target.id);
  }

});