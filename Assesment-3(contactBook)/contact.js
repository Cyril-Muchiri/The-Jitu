
const addButton = document.getElementById('addbtn');
const contactCardContainer = document.querySelector('.contactCard');

addButton.addEventListener('click', () => {
  console.log('clicked');
window.location.href = 'newContact.html';
});


function displayContacts() {
  contactCardContainer.innerHTML = '';

  const contacts = JSON.parse(localStorage.getItem('contacts')) ;
  contacts.forEach((contact, index) => {
    console.log(`Contact: ${contact.name} Phone: ${contact.phone}`);
  });
// console.log(contacts);
  contacts.forEach((contact, index) => {
const totalContainer=document.createElement('div');
totalContainer.classList.add('mainContainer');

    const container=document.createElement('div');
    container.classList.add('user');

    const lineBreak=document.createElement('div');
    lineBreak.classList.add('breaker');
    const line=document.createElement('hr');
    lineBreak.appendChild(line);
  
    const phoneName =document.createElement('div');
    phoneName.classList.add('name');
    phoneName.textContent=contact.name;
    container.appendChild(phoneName);


    const phoneNo =document.createElement('div');
    phoneNo.classList.add('number');
    phoneNo.textContent=contact.phone;
    container.appendChild(phoneNo);

const deleteBtn=document.createElement('button');
deleteBtn.textContent="x";
deleteBtn.style.height="30px";
deleteBtn.style.width="50px";
deleteBtn.style.backgroundColor="#905554"
container.appendChild(deleteBtn);

lineBreak.appendChild(line);
// container.appendChild(lineBreak);

totalContainer.appendChild(container);
totalContainer.appendChild(lineBreak);

deleteBtn.addEventListener('click',()=>{
deleteContact(index);
})

    // const contactCards=document.createElement('div');
    contactCardContainer.appendChild(totalContainer);
    
    
    // container.appendChild(contactCardContainer);
    // console.log('end');
  });
}


function addContact(name, phone) {
  const contact = { name, phone };
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}


function updateContact(index, name, phone) {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  if (index >= 0 && index < contacts.length) {
    contacts[index].name = name;
    contacts[index].phone = phone;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}

function deleteContact(index) {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts(); 
  }
}



displayContacts();


