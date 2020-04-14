
  $(document).on("click", function(event){
  if(window.location.href.indexOf('event') > 0){
    if(event.target.id == 'createAnEvent'){
      document.location.href = 'createAnEvent.html';
    }else {
      document.location.href = 'events-info.html';
      event.target.id;
      sessionStorage.setItem("learnMoreNum",event.target.id);
    }
  }
});

$(document).on("click", function(event){
  if(window.location.href.indexOf('class') > 0){
    if(event.target.id == 'createAnClass'){
      document.location.href = 'createAclass.html';
    }else {
      document.location.href = 'class-info.html';
      event.target.id;
      sessionStorage.setItem("learnMoreNum",event.target.id);
    }
  }
});

$(document).on("click", function(event){
  if(window.location.href.indexOf('blog') > 0){
    if(event.target.id == 'createBlog'){
      document.location.href = 'createABlog.html';
    }else {
      document.location.href = 'blog-info.html';
      event.target.id;
      sessionStorage.setItem("learnMoreNum",event.target.id);
    }
  }
});