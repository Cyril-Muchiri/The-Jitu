const selectElement = document.getElementById('users');
const container = document.querySelector('.container');
const chatsDiv = document.querySelector('.chats');




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
    

    // Trigger change event on the select element to pre-populate the first user details on page load
    selectElement.dispatchEvent(new Event('change'));
  } )
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//populate user details based on the selected user
function populateUserDetails(selectedUser) {
  if (selectedUser) {
    // Clear the existing user details in the container
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
    console.error('Selected user not found.');
  }
}

// Add a change event listener to the select element
selectElement.addEventListener('change', function() {
  const selectedUserId = parseInt(selectElement.value);
  
  fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`)
    .then(response => response.json())
    .then(data => {
      populateUserDetails(data);
    })
    // .catch(error => {
    //   console.error('Error fetching user data:', error);
    // });
});


// Function to populate the chat with respect to the selected user
function populateChat(userId) {
  // Fetch chat data from the API
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(postsData => {
      // Clear the existing chats in the chats div
      chatsDiv.innerHTML = '';

      // Create and append chat items to the chats div
      postsData.forEach(post => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        // chatItem.style.display="grid";
//create the pic div
        const userPic=document.createElement('div');
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

        const commentsBtn=document.createElement('div');
        


        chatsDiv.appendChild(chatItem);

        // Add a horizontal line to separate each chat item
        const horizontalLine = document.createElement('hr');
        chatsDiv.appendChild(horizontalLine);
      });
    })
    .catch(error => {
      console.error('Error fetching chat data:', error);
    });
}

// Function to fetch user details from the API and populate the select element

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

      // Trigger change event on the select element to pre-populate the chat for the first user on page load
      selectElement.dispatchEvent(new Event('change'));
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}

// Add a change event listener to the select element
selectElement.addEventListener('change', function() {
  const selectedUserId = parseInt(selectElement.value);
  // Call the function to populate the chat with respect to the selected user
  populateChat(selectedUserId);
});

// Call the function to populate users on page load
// populateUsers();
