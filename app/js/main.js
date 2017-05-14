

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
try {

  btnOpen.addEventListener('click', toggle, false);
  btnClose.addEventListener('click', toggle, false);


  function toggle() {
    btnClose.style.display = (btnClose.style.display == 'block') ? '' : 'block';
    btnOpen.style.display = (btnOpen.style.display == 'none') ? '' : 'none';
    menuShield.style.visibility = (menuShield.style.visibility == 'visible') ? '' : 'visible';
  }

} catch (e) {

}
console.log('d')

var case1 = document.querySelector('.case1-wrap')
var case2 = document.querySelector('.case2-wrap')
var case3 = document.querySelector('.case3-wrap')
var caseTitle = document.querySelectorAll('.case-title')
var caseText = document.querySelectorAll('.case-text')

for(var i = 0; i <= caseText.length && i <=caseTitle.length; i++) {

  var caseTexts = caseText[i]
  var caseTitles = caseTitle[i]



  case1.onmouseover = function () {
    caseText[0].firstElementChild.style.color = '#ffffff';
    caseTitle[0].firstElementChild.style.color = '#ffffff';
  }

  case1.onmouseout = function () {
    caseText[0].firstElementChild.style.color = '#676767';
    caseTitle[0].firstElementChild.style.color = '#676767';
  }
  case2.onmouseover = function () {
    caseText[1].firstElementChild.style.color = '#ffffff';
    caseTitle[1].firstElementChild.style.color = '#ffffff';
  }

  case2.onmouseout = function () {
    caseText[1].firstElementChild.style.color = '#676767';
    caseTitle[1].firstElementChild.style.color = '#676767';
  }
  case3.onmouseover = function () {
    caseText[2].firstElementChild.style.color = '#ffffff';
    caseTitle[2].firstElementChild.style.color = '#ffffff';
  }

  case3.onmouseout = function () {
    caseText[2].firstElementChild.style.color = '#676767';
    caseTitle[2].firstElementChild.style.color = '#676767';
  }

}
