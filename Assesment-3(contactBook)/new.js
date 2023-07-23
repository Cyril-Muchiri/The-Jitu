
const nameInput = document.querySelector('.name');
const phoneInput = document.querySelector('.tel');
const saveButton = document.querySelector('.savebtn');




function saveContact(name, phone) {
    const contact = { name, phone };
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  saveButton.addEventListener('click', function()  {
    console.log("click");
  var name = nameInput.value;
  var phone = phoneInput.value;


  saveContact(name, phone);

 
  // nameInput.value = '';
  // phoneInput.value = '';

  window.location = 'contact.html';
});
