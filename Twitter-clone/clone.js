
const searchForm = document.querySelector('form');
const searchInput = document.getElementById('search');
const searchName = document.querySelector('.name h3');//
const details = document.querySelector('.details');
// const resultSearch=document.querySelector('#result') ;
const chats = document.querySelector('.chats');
// const searchInput = document.querySelector('input[name="search"]');
const commentButton=document.querySelector('.comment_button');
const commentsDiv=document.querySelector('.comments');


searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const searchName = searchInput.value.trim(); 
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json()) 
    .then(data => {
      if (data.length > 0) {
        const user = data[0]; 
        
        searchName.textContent = user.name;
        details.innerHTML = `
          <li>@ ${user.username}</li>
          <li><a href="${user.website}">Link to my website</a></li>
          <li>${user.company.name}</li>
          <li>
            <img src="assets/maps-and-flags.png" style="width: 13px; height: 13px" alt="" />
            ${user.address.city}
          </li>
        `;
        commentButton.addEventListener('click', function() {
            commentsDiv.classList.add('comments-div');
            
            
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${2}`)
              .then(response => response.json())
              .then(comments => {
                
                let commentsHTML = '';
                for (const comment of comments) {
                  commentsHTML += `<div class="comment">
                    <h4>${comment.name}</h4>
                    <p>${comment.body}</p>
                  </div>`;
                }
                commentsDiv.innerHTML = commentsHTML;
              })
              .catch(error => {
                console.log(error);
              });
          });
        
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${2}`)
          .then(response => response.json()) 
          .then(posts => {
            let chatsHTML = '';
            for (const post of posts) {
              chatsHTML += `<div class="chat">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
              </div>`;
            }
            chats.innerHTML = chatsHTML;
          })
        
      } else {
       
        nameElement.textContent = '';
        detailsElement.innerHTML = '';
        chatsElement.innerHTML = '';
      }
    })
});
