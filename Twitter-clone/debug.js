const selectElement = document.getElementById('users');
const container = document.querySelector('.container');
const chatsDiv = document.querySelector('.chats');
const commentsResult=document.querySelector('.comments');




// Fetch user data and populate the select element
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
   
    data.forEach(user => {
      var option = document.createElement('option');
      option.value = user.id;
      option.textContent = user.name;
      
      selectElement.appendChild(option);
      
    });
    
    selectElement.dispatchEvent(new Event('change'));
  } )
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//populate user details based on the selected user
function populateUserDetails(selectedUser) {
  if (selectedUser) {
    container.innerHTML = '';

    // Create the elements for the selected user
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.style.marginTop = "45px";
    userDiv.style.marginLeft = "12px";


    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = selectedUser.name;

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');

    const usernameLi = document.createElement('li');
    usernameLi.textContent = `@${selectedUser.username}`;

    const websiteLi = document.createElement('li');
    websiteLi.textContent = 'Link to my website';
    

    const locationLi = document.createElement('li');
    const locationImg = document.createElement('img');
    locationImg.src = 'assets/maps-and-flags.png';
    locationImg.style.width = '13px';
    locationImg.style.height = '13px';
    locationLi.appendChild(locationImg);
    locationLi.appendChild(document.createTextNode(selectedUser.address.city));

   
    nameDiv.appendChild(nameHeading);
    detailsDiv.appendChild(usernameLi);
    detailsDiv.appendChild(websiteLi);
    detailsDiv.appendChild(locationLi);
    userDiv.appendChild(nameDiv);
    userDiv.appendChild(detailsDiv);
    container.appendChild(userDiv);
  } else {
    console.log('Selected user not found.');
  }
}

selectElement.addEventListener('change', function() {
  const selectedUserId = parseInt(selectElement.value);
  
  fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`)
    .then(response => response.json())
    .then(data => {
      populateUserDetails(data);
    })
    
});


// user data on select
function populateChat(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(postsData => {
      
      chatsDiv.innerHTML = '';

      
      postsData.forEach(post => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        // chatItem.style.display="grid";
// pic div
        const userPic=document.createElement('avatar');
        userPic.classList.add('pic');
        // userPic.style.display="flex";
        // userPic.style.flexDirection="row";

        //populate the pics element
        const userImage=document.createElement('img');
        userImage.src ="/assets/squidward.png";
        // userImage.style.width="40px";
        // userImage.style.hesight="10px";
        chatItem.appendChild(userImage);

        const title = document.createElement('div');
        title.textContent = post.title;
        title.style.fontWeight="bold";
        chatItem.appendChild(title);

        const body = document.createElement('div');
        body.textContent = post.body;
        body.style.fontSize="12px";
        chatItem.appendChild(body);

        //div for reactions
        const reactions=document.createElement('div');
        reactions.classList.add('reactions');

        //all child divs 
        const commentsBtn=document.createElement('div');
        commentsBtn.classList.add('commentBtn');

        const retweetBtn=document.createElement('div');
        retweetBtn.classList.add('retweet');

        const likeBtn=document.createElement('div');
        likeBtn.classList.add('likeBtn');

      
      const comment=document.createElement('img');
        comment.src="/assets/icon-comment.png";
        reactions.appendChild(comment);

        comment.addEventListener('click',function(){
          fetch( `https://jsonplaceholder.typicode.com/comments?userId=${userId}`)
          .then( response=>response.json()
          .then(comments=>{
      
            commentsResult.innerHTML='';
        for (let index = 0; index < 20 ; index++) {

          // const element = comments[index];
          // console.log(element);

          const commentItem = document.createElement('div');
          commentItem.classList.add('comment-item');
          

          // const reactionsComment=document.createElement('div');
          const reactions=document.createElement('div');
          reactions.classList.add('reactions');
          reactions.style.justifyContent="start";
          reactions.style.gap="30px";
  
          const commentBody = document.createElement('div');
          commentBody.textContent = post.body;
          commentBody.style.fontSize="12px";

          const commentsBtn=document.createElement('div');
          commentsBtn.classList.add('commentBtn');
  
          const retweetBtn=document.createElement('div');
          retweetBtn.classList.add('retweet');
  
          const likeBtn=document.createElement('div');
          likeBtn.classList.add('likeBtn');

          const retweet=document.createElement('img');
          retweet.src="/assets/icons-retweet.png";
          reactions.appendChild(retweet);
  
          const like=document.createElement('img');
          like.src="/assets/icons-like.png";
          reactions.appendChild(like);

          const horizontalLine = document.createElement('hr');
          commentItem.appendChild(horizontalLine);

          commentItem.appendChild(commentBody);
          commentItem.appendChild(reactions);

         
          commentsResult.appendChild(commentItem);
          
        }
            
            comments.forEach(comment=>{
             
              
               
              
             
            
            })
          //   const commentDiv=document.createElement('div');
          //   commentDiv.textContent = comments.body;
      
             
      
          }))
        })


        const retweet=document.createElement('img');
        retweet.src="/assets/icons-retweet.png";
        reactions.appendChild(retweet);

        const like=document.createElement('img');
        like.src="/assets/icons-like.png";
        reactions.appendChild(like);

        
        chatsDiv.appendChild(chatItem);
        chatsDiv.appendChild(reactions);

        // line separator
        const horizontalLine = document.createElement('hr');
        chatsDiv.appendChild(horizontalLine);
      });
    })
   
}

// select populate

function populateUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        selectElement.appendChild(option);
      });

     
      selectElement.dispatchEvent(new Event('change'));
    })
}

selectElement.addEventListener('change', function() {
  const selectedUserId = parseInt(selectElement.value);
  populateChat(selectedUserId);
});

// populateUsers();
