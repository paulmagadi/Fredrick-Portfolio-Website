const contactsBtn = document.querySelector('.view-contacts-button');
const contacts = document.querySelector('.profile-information-segment');
const viewContactIcon = document.querySelector('.view-contact-icon');


contactsBtn.addEventListener('click', function() {
    contacts.classList.toggle('active');

})