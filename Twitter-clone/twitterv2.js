
const selectElement = document.getElementById('users');
const container = document.querySelector('.container');


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
