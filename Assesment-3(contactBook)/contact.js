
const addButton = document.getElementById('button');
const contactCardContainer = document.querySelector('.contactCard');


function displayContacts() {
  contactCardContainer.innerHTML = '';

  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
console.log('disp');
  contacts.forEach((contact, index) => {
    const container=document.createElement('div');
    container.classList.add('user');

    const contactCards=document.createElement(contact,index);
    contactCardContainer.appendChild(contactCards);
    
    // container.appendChild(contactCardContainer);
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

function createContactCard(contact, index) {

}


addButton.addEventListener('click', () => {
  
  window.location.href = 'newContact.html';
});
displayContacts();


