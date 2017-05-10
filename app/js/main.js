

var btnClose = document.querySelector('.close-menu');
var btnOpen = document.querySelector('.open-menu');
var menuShield = document.querySelector('.collapsePanel');




// function collapsePanel() {
//   alert('d');
//   if (btnClose.style.display == 'block') {
//       alert('dd');
//        // btnClose.style.display == 'none' && btnOpen.style.display == 'block'
//   }
//   else {
//       alert('hui')
//   }
// }


btnOpen.addEventListener('click', toggle, false);
btnClose.addEventListener('click', toggle, false);



function toggle() {
  btnClose.style.display = (btnClose.style.display == 'block') ? '' : 'block' ;
  btnOpen.style.display = (btnOpen.style.display == 'none') ? '' : 'none' ;
  menuShield.style.visibility = (menuShield.style.visibility == 'visible') ? '' : 'visible';
}

