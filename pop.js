const openPopupBtn = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');
const applyBtn = document.getElementById('applyBtn');
const cancelBtn = document.getElementById('cancelBtn');
const openBtn = document.getElementById('open-terminal-btn');
const closeBtn = document.getElementById('close-terminal-btn');
const terminalPopup = document.getElementById('terminal-popup');
const closeAlert = document.querySelector('.closeAlert');
const dropbtn = document.querySelector('.dropbtn');
const closeTerminalBtn = document.querySelector('#close-terminal-btn');
const remove = document.querySelector('#remove');
const addbtn = document.querySelector('#add');
const alert = document.querySelector('.alertContaint');
const alert1 = document.querySelector('.alertContaint1');
const alert2 = document.querySelector('.alertContaint2');
const ok1 = document.querySelector('.ok1');
const ok2 = document.querySelector('.ok2');
const ok3 = document.querySelector('.ok3');

ok1.addEventListener('click',()=>{
    alert.style.display = 'none';
    alert1.style.display = 'block';
    ok2.classList.add('blinking-text');
})
ok2.addEventListener('click',()=>{
    alert1.style.display = 'none';
    alert2.style.display = 'block';
    ok3.classList.add('blinking-text');
})
ok3.addEventListener('click',()=>{
    alert2.style.display = 'none';
    addbtn.classList.add('blinking-text');
})
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    remove.classList.remove('blinking-text');

});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    console.log("dfghjkl");
    
});

openBtn.addEventListener('click', () => {
    // Handle form submission logic here
    terminalPopup.style.display = 'flex';
    ok1.classList.add('blinking-text');
    popup.style.display = 'none';
    openPopupBtn.classList.remove('blinking-text');
    closeTerminal()

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

function closeTerminal(){
    setTimeout(() => {
        terminalPopup.style.display = 'none';
        console.log('dfgfdgdfgdfg');
        alert.style.display = 'block';
    }, 2555); 
}

closeAlert.addEventListener('click', () => {
  alert.style.display = 'none';
})


