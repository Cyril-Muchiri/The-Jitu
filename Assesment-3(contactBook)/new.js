
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('tel');
const saveButton = document.getElementById('save');

function saveContact(name, phone) {
  const contact = { name, phone };
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}


saveButton.addEventListener('click', () => {
    console.log("click");
  const name = nameInput.value;
  const phone = phoneInput.value;


  saveContact(name, phone);

 
  nameInput.value = '';
  phoneInput.value = '';

  window.location = 'contact.html';
});
