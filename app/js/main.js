
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

function countOtherBlocks() {
  var blocks =[];
  var icons = [];
  var count = 5;
  for (var i = 0; i <= count; i++){
    var othersBlock = document.querySelector('.others-block' + i)
    var othersIcon = document.querySelector('.others-icon' + i);
    blocks.push(othersBlock);
    icons.push(othersIcon);
  }
  console.log(blocks);
  console.log(icons);



  var iconOverlay = document.createElement('div');

    blocks[0].onmouseover = function() {
    blocks[0].insertBefore(iconOverlay, blocks[0].firstChild);
    iconOverlay.appendChild(icons[0]);
    iconOverlay.style.backgroundColor = '#ffb103';
    iconOverlay.style.display = 'block';
    icons[0].style.opacity = .7;
  }

    blocks[0].onmouseout = function () {
    blocks[0].removeChild(iconOverlay);
    blocks[0].insertBefore(icons[0], blocks[0].firstChild);
    icons[0].style.opacity = 1;
  }

    blocks[1].onmouseover = function() {
    blocks[1].insertBefore(iconOverlay, blocks[1].firstChild);
    iconOverlay.appendChild(icons[1]);
    iconOverlay.style.backgroundColor = '#ffb103';
    iconOverlay.style.display = 'block';
    icons[1].style.opacity = .7;
  }

    blocks[1].onmouseout = function () {
    blocks[1].removeChild(iconOverlay);
    blocks[1].insertBefore(icons[1], blocks[1].firstChild);
    icons[1].style.opacity = 1;
  }

  blocks[2].onmouseover = function() {
    blocks[2].insertBefore(iconOverlay, blocks[2].firstChild);
    iconOverlay.appendChild(icons[2]);
    iconOverlay.style.backgroundColor = '#ffb103';
    iconOverlay.style.display = 'block';
    icons[2].style.opacity = .7;
  }

  blocks[2].onmouseout = function () {
    blocks[2].removeChild(iconOverlay);
    blocks[2].insertBefore(icons[2], blocks[2].firstChild);
    icons[2].style.opacity = 1;
  }

  blocks[3].onmouseover = function() {
    blocks[3].insertBefore(iconOverlay, blocks[3].firstChild);
    iconOverlay.appendChild(icons[3]);
    iconOverlay.style.backgroundColor = '#ffb103';
    iconOverlay.style.display = 'block';
    icons[3].style.opacity = .7;
  }

  blocks[3].onmouseout = function () {
    blocks[3].removeChild(iconOverlay);
    blocks[3].insertBefore(icons[3], blocks[3].firstChild);
    icons[3].style.opacity = 1;
  }

  blocks[4].onmouseover = function() {
    blocks[4].insertBefore(iconOverlay, blocks[4].firstChild);
    iconOverlay.appendChild(icons[4]);
    iconOverlay.style.backgroundColor = '#ffb103';
    iconOverlay.style.display = 'block';
    icons[4].style.opacity = .7;
  }

  blocks[4].onmouseout = function () {
    blocks[4].removeChild(iconOverlay);
    blocks[4].insertBefore(icons[4], blocks[4].firstChild);
    icons[4].style.opacity = 1;
  }

  blocks[5].onmouseover = function() {
    blocks[5].insertBefore(iconOverlay, blocks[5].firstChild);
    iconOverlay.appendChild(icons[5]);
    iconOverlay.style.backgroundColor = '#ffb103';
    iconOverlay.style.display = 'block';
    icons[5].style.opacity = .7;
  }

  blocks[5].onmouseout = function () {
    blocks[5].removeChild(iconOverlay);
    blocks[5].insertBefore(icons[5], blocks[5].firstChild);
    icons[5].style.opacity = 1;
  }

}
countOtherBlocks();




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
