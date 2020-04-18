var eventKey;
var classKeys;
var blogKey;
window.onload = function() {

  var login = sessionStorage.getItem("login");
  if(login == 0)
  {
    document.getElementById('createBlog').hide;
  }

  

  var blogGetRef = dbRef.ref("blog");

  
  blogGetRef.on("value", gotData);



  var blogObjs = [];
  function gotData(data) {

    var blogs = data.val();
   
    blogKey = Object.keys(blogs);
    alert(blogKey);
    sessionStorage.setItem("blogKey", blogKey);
   
    for (var i = 0; i < blogKey.length; i++) {

      var key = blogKey[i];

    
      var blo = blogs[key];

      var blogObj = {
        "name": blo.name,
        "introduction": blo.introduction,
        "author": blo.author,
        "description": blo.description
      };

      blogObjs.push(blogObj);
    }
   



    let cardContainer;
    var counter = 0;
    let createTaskCard = (blogObjs) => {

    
      let card = document.createElement('div');
      card.blogName = 'col-lg-12 mb-4';

      let cardHeader = document.createElement('div');
      cardHeader.blogName = 'card h-200';

      let cardHeaderInner = document.createElement('h4');
      cardHeaderInner.blogName = 'card-header'
      cardHeaderInner.innerHTML = blogObjs.name;


      let cardBody = document.createElement('div');
      cardBody.blogName = 'card-body';

      let cardBodyInner = document.createElement('p');
      cardBodyInner.blogName = 'card-text';
      cardBodyInner.innerHTML = "Introduction: " + blogObjs.introduction;

      let cardFooter = document.createElement('div');
      cardFooter.blogName = 'card-footer';

      let cardFooterInner = document.createElement('a');
      cardFooterInner.id = counter;
      cardFooterInner.blogName = 'btn btn-primary';
      cardFooterInner.innerHTML = 'Learn More';
      cardFooterInner.href = 'blog-info.html';



      cardHeader.appendChild(cardHeaderInner);
      
      cardBody.appendChild(cardBodyInner);
      cardFooter.appendChild(cardFooterInner);
      cardHeader.appendChild(cardBody);
      cardHeader.appendChild(cardFooter);
      card.appendChild(cardHeader);
      cardContainer.appendChild(card);
      counter++

    }

    let initListOfTasks = () => {
      if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
      }

      cardContainer = document.getElementById('card-container');
      blogObjs.forEach((blogObjs) => {
        createTaskCard(blogObjs);
      });
    };

    initListOfTasks();
  }
}

