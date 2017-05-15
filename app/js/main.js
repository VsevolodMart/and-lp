
$( document ).ready(function() {

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
  if (window.innerWidth > 1199) {
    try {

      for (var i = 0; i <= caseText.length && i <= caseTitle.length; i++) {

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
    } catch (e) {
    }
  }

  try {

    var knowledgeWrap = document.querySelector('.knowledge ')
    var caseWrap = document.querySelector('.case')
    var networkingWrap = document.querySelector('.networking')
    var textWrap = document.querySelectorAll('.text-wrap')
    var iconWrap = document.querySelectorAll('.icon-wrap')


    if ($(document).width() > 1199) {

      for (var i = 0; i <= textWrap.length && i <= iconWrap.length; i++) {


        knowledgeWrap.onmouseover = function () {
          textWrap[0].firstElementChild.style.color = '#ffffff';
          textWrap[0].lastElementChild.style.color = '#ffffff';
          iconWrap[0].firstElementChild.style.display = 'none'
          iconWrap[0].lastElementChild.style.display = 'block'
        }

        knowledgeWrap.onmouseout = function () {
          textWrap[0].firstElementChild.style.color = '#676767';
          textWrap[0].lastElementChild.style.color = '#676767';
          iconWrap[0].firstElementChild.style.display = 'block'
          iconWrap[0].lastElementChild.style.display = 'none'
        }
        caseWrap.onmouseover = function () {
          textWrap[1].firstElementChild.style.color = '#ffffff';
          textWrap[1].lastElementChild.style.color = '#ffffff';
          iconWrap[1].firstElementChild.style.display = 'none'
          iconWrap[1].lastElementChild.style.display = 'block'
        }

        caseWrap.onmouseout = function () {
          textWrap[1].firstElementChild.style.color = '#676767';
          textWrap[1].lastElementChild.style.color = '#676767';
          iconWrap[1].firstElementChild.style.display = 'block'
          iconWrap[1].lastElementChild.style.display = 'none'
        }
        networkingWrap.onmouseover = function () {
          textWrap[2].firstElementChild.style.color = '#ffffff';
          textWrap[2].lastElementChild.style.color = '#ffffff';
          iconWrap[2].firstElementChild.style.display = 'none'
          iconWrap[2].lastElementChild.style.display = 'block'
        }

        networkingWrap.onmouseout = function () {
          textWrap[2].firstElementChild.style.color = '#676767';
          textWrap[2].lastElementChild.style.color = '#676767';
          iconWrap[2].firstElementChild.style.display = 'block'
          iconWrap[2].lastElementChild.style.display = 'none'
        }
      }
    }
    else if ($(window).width() <= 1199) {
      for (var i = 0; i <= textWrap.length && i <= iconWrap.length; i++) {


        knowledgeWrap.onmouseover = function () {
          textWrap[0].firstElementChild.style.color = '';
          textWrap[0].lastElementChild.style.color = '';
          iconWrap[0].firstElementChild.style.display = '';
          iconWrap[0].lastElementChild.style.display = '';
        }

        knowledgeWrap.onmouseout = function () {
          textWrap[0].firstElementChild.style.color = '';
          textWrap[0].lastElementChild.style.color = '';
          iconWrap[0].firstElementChild.style.display = '';
          iconWrap[0].lastElementChild.style.display = '';
        }
        caseWrap.onmouseover = function () {
          textWrap[1].firstElementChild.style.color = '';
          textWrap[1].lastElementChild.style.color = '';
          iconWrap[1].firstElementChild.style.display = '';
          iconWrap[1].lastElementChild.style.display = '';
        }

        caseWrap.onmouseout = function () {
          textWrap[1].firstElementChild.style.color = '';
          textWrap[1].lastElementChild.style.color = '';
          iconWrap[1].firstElementChild.style.display = '';
          iconWrap[1].lastElementChild.style.display = '';
        }
        networkingWrap.onmouseover = function () {
          textWrap[2].firstElementChild.style.color = '';
          textWrap[2].lastElementChild.style.color = '';
          iconWrap[2].firstElementChild.style.display = '';
          iconWrap[2].lastElementChild.style.display = '';
        }

        networkingWrap.onmouseout = function () {
          textWrap[2].firstElementChild.style.color = '';
          textWrap[2].lastElementChild.style.color = '';
          iconWrap[2].firstElementChild.style.display = '';
          iconWrap[2].lastElementChild.style.display = '';
        }

      }
    }


    $(window).resize(function () {
      if ($(document).width() > 1199) {

        for (var i = 0; i <= textWrap.length && i <= iconWrap.length; i++) {


          knowledgeWrap.onmouseover = function () {
            textWrap[0].firstElementChild.style.color = '#ffffff';
            textWrap[0].lastElementChild.style.color = '#ffffff';
            iconWrap[0].firstElementChild.style.display = 'none'
            iconWrap[0].lastElementChild.style.display = 'block'
          }

          knowledgeWrap.onmouseout = function () {
            textWrap[0].firstElementChild.style.color = '#676767';
            textWrap[0].lastElementChild.style.color = '#676767';
            iconWrap[0].firstElementChild.style.display = 'block'
            iconWrap[0].lastElementChild.style.display = 'none'
          }
          caseWrap.onmouseover = function () {
            textWrap[1].firstElementChild.style.color = '#ffffff';
            textWrap[1].lastElementChild.style.color = '#ffffff';
            iconWrap[1].firstElementChild.style.display = 'none'
            iconWrap[1].lastElementChild.style.display = 'block'
          }

          caseWrap.onmouseout = function () {
            textWrap[1].firstElementChild.style.color = '#676767';
            textWrap[1].lastElementChild.style.color = '#676767';
            iconWrap[1].firstElementChild.style.display = 'block'
            iconWrap[1].lastElementChild.style.display = 'none'
          }
          networkingWrap.onmouseover = function () {
            textWrap[2].firstElementChild.style.color = '#ffffff';
            textWrap[2].lastElementChild.style.color = '#ffffff';
            iconWrap[2].firstElementChild.style.display = 'none'
            iconWrap[2].lastElementChild.style.display = 'block'
          }

          networkingWrap.onmouseout = function () {
            textWrap[2].firstElementChild.style.color = '#676767';
            textWrap[2].lastElementChild.style.color = '#676767';
            iconWrap[2].firstElementChild.style.display = 'block'
            iconWrap[2].lastElementChild.style.display = 'none'
          }
        }
      }

      else if ($(window).width() <= 1199) {
        for (var i = 0; i <= textWrap.length && i <= iconWrap.length; i++) {


          knowledgeWrap.onmouseover = function () {
            textWrap[0].firstElementChild.style.color = '';
            textWrap[0].lastElementChild.style.color = '';
            iconWrap[0].firstElementChild.style.display = '';
            iconWrap[0].lastElementChild.style.display = '';
          }

          knowledgeWrap.onmouseout = function () {
            textWrap[0].firstElementChild.style.color = '';
            textWrap[0].lastElementChild.style.color = '';
            iconWrap[0].firstElementChild.style.display = '';
            iconWrap[0].lastElementChild.style.display = '';
          }
          caseWrap.onmouseover = function () {
            textWrap[1].firstElementChild.style.color = '';
            textWrap[1].lastElementChild.style.color = '';
            iconWrap[1].firstElementChild.style.display = '';
            iconWrap[1].lastElementChild.style.display = '';
          }

          caseWrap.onmouseout = function () {
            textWrap[1].firstElementChild.style.color = '';
            textWrap[1].lastElementChild.style.color = '';
            iconWrap[1].firstElementChild.style.display = '';
            iconWrap[1].lastElementChild.style.display = '';
          }
          networkingWrap.onmouseover = function () {
            textWrap[2].firstElementChild.style.color = '';
            textWrap[2].lastElementChild.style.color = '';
            iconWrap[2].firstElementChild.style.display = '';
            iconWrap[2].lastElementChild.style.display = '';
          }

          networkingWrap.onmouseout = function () {
            textWrap[2].firstElementChild.style.color = '';
            textWrap[2].lastElementChild.style.color = '';
            iconWrap[2].firstElementChild.style.display = '';
            iconWrap[2].lastElementChild.style.display = '';
          }

        }
      }


    });
  } catch(e) {}

});








// variant II

// var knowledgeWrap = document.querySelector('.knowledge ')
// var caseWrap = document.querySelector('.case')
// var networkingWrap = document.querySelector('.networking')
// var textWrap = document.querySelectorAll('.text-wrap')
// var iconWrap = document.querySelectorAll('.icon-wrap')
//
// for (var i = 0; i <= textWrap.length && i <= iconWrap.length; i++) {
//
//
//   knowledgeWrap.onmouseover = function () {
//     if ($(document).width() > 1199) {
//       textWrap[0].firstElementChild.style.color = '#ffffff';
//       textWrap[0].lastElementChild.style.color = '#ffffff';
//       iconWrap[0].firstElementChild.style.display = 'none'
//       iconWrap[0].lastElementChild.style.display = 'block'
//     }
//   }
//
//   knowledgeWrap.onmouseout = function () {
//     if ($(document).width() > 1199) {
//       textWrap[0].firstElementChild.style.color = '#676767';
//       textWrap[0].lastElementChild.style.color = '#676767';
//       iconWrap[0].firstElementChild.style.display = 'block'
//       iconWrap[0].lastElementChild.style.display = 'none'
//     }
//   }
//   caseWrap.onmouseover = function () {
//     if ($(document).width() > 1199) {
//       textWrap[1].firstElementChild.style.color = '#ffffff';
//       textWrap[1].lastElementChild.style.color = '#ffffff';
//       iconWrap[1].firstElementChild.style.display = 'none'
//       iconWrap[1].lastElementChild.style.display = 'block'
//     }
//   }
//
//   caseWrap.onmouseout = function () {
//     if ($(document).width() > 1199) {
//       textWrap[1].firstElementChild.style.color = '#676767';
//       textWrap[1].lastElementChild.style.color = '#676767';
//       iconWrap[1].firstElementChild.style.display = 'block'
//       iconWrap[1].lastElementChild.style.display = 'none'
//     }
//   }
//   networkingWrap.onmouseover = function () {
//     if ($(document).width() > 1199) {
//       textWrap[2].firstElementChild.style.color = '#ffffff';
//       textWrap[2].lastElementChild.style.color = '#ffffff';
//       iconWrap[2].firstElementChild.style.display = 'none'
//       iconWrap[2].lastElementChild.style.display = 'block'
//     }
//   }
//
//   networkingWrap.onmouseout = function () {
//     if ($(document).width() > 1199) {
//       textWrap[2].firstElementChild.style.color = '#676767';
//       textWrap[2].lastElementChild.style.color = '#676767';
//       iconWrap[2].firstElementChild.style.display = 'block'
//       iconWrap[2].lastElementChild.style.display = 'none'
//     }
//   }
//   // - -- -- -
// }
