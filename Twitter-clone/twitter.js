const resultName=document.querySelector('.mySearch'); //sinput
const search=document.querySelector('.search');
// const resultSearch=document.querySelector('#result') ;
const acName=document.querySelector('h3');
const details=document.querySelector('.details');
const chats=document.querySelector('.chats');
// const searchInput = document.querySelector('input[name="search"]');
const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', function(event){
    event.preventDefault();

    const searchName=search.value.trim();

    fetch(`https://jsonplaceholder.typicode.com/users?username=${searchTerm}`)
    .then(response=> response.json()).then(data=>{
        if(data.length!=0){
            const user=data[0];
            acName.textContent=user.name;

            details.innerHTML = `
            <li>@ ${user.username}</li>
            <li><a href="${user.website}">Link to my website</a></li>
            <li>${user.company.name}</li>
            <li>
              <img src="assets/maps-and-flags.png" style="width: 13px; height: 13px" alt="" />
              ${user.address.city}
            </li>
          `;
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
          .then(response => response.json()) // Parse the response as JSON
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
          .catch(error => {
            console.log(error);
          });
      } else {
        // If no user is found, reset the user information and chats
        acName.textContent = '';
        details.innerHTML = '';
        chats.innerHTML = '';
      }
    })
    // .catch(error => {
    //        console.log(error);
    //      });
});



