const contactsBtn = document.querySelector('.view-contacts-button');
const contacts = document.querySelector('.profile-information-segment');
const lineBreak = document.querySelector('.line-break');

contactsBtn.addEventListener('click', function() {
    contacts.classList.toggle('active');

    if (contacts.classList.contains('active')) {
        contactsBtn.innerHTML = '<p>Close Contacts &uparrow;</p>';
        lineBreak.style.display = 'block';
      } else {
        contactsBtn.innerHTML = '<p>View Contacts &downarrow;</p> ';
        lineBreak.style.display = 'none';
      }
})





