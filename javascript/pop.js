const openPopupBtn = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');
const applyBtn = document.getElementById('applyBtn');
const cancelBtn = document.getElementById('cancelBtn');
const openBtn = document.getElementById('open-terminal-btn');
const closeBtn = document.getElementById('close-terminal-btn');
const terminalPopup = document.getElementById('terminal-popup');
const dropbtn = document.querySelector('.dropbtn');
const closeTerminalBtn = document.querySelector('#close-terminal-btn');
const remove = document.querySelector('#remove');
const addbtn = document.querySelector('#add');

openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    remove.classList.remove('blinking-text');

});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    // Handle form submission logic here
    terminalPopup.style.display = 'flex';
    popup.style.display = 'none';
    openPopupBtn.classList.remove('blinking-text');

});

// Close popup if user clicks outside the popup
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
};

closeBtn.addEventListener('click', () => {
  terminalPopup.style.display = 'none';
  addbtn.classList.add('blinking-text');
});

