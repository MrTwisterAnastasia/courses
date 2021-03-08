const divF = document.getElementById('first')
const divS = document.getElementById('second')
const clickF = document.getElementById('firstClick')
const clickS = document.getElementById('secondClick')
const clickT = document.getElementById('threeClick')
const notepad = document.getElementById("notepad");
const ctxMenu = document.getElementById("ctxMenu");
notepad.addEventListener("contextmenu", function (event) {
   event.preventDefault();
   var ctxMenu = document.getElementById("ctxMenu");
   ctxMenu.style.display = "block";
   ctxMenu.style.left = (event.pageX + 20) + "px";
   ctxMenu.style.top = (event.pageY - 10) + "px";
}, false);
function closeCTXMenu(event) {
   var ctxMenu = document.getElementById("ctxMenu");
   ctxMenu.style.display = "";
   ctxMenu.style.left = "";
   ctxMenu.style.top = "";
}
notepad.addEventListener("click", closeCTXMenu, false);
window.addEventListener("click", closeCTXMenu, false);

// clickF.onclick = function () {
//    divF.style.backgroundColor = 'yellow'
// }
// clickS.onclick = function () {
//    divS.style.backgroundColor = 'green'
// }
// clickT.onclick = function () {
//    divF.style.backgroundColor = 'white'
//    divS.style.backgroundColor = 'white'
// }
function menuClick(idName) {
   switch (idName) {
      case 'firstClick':
         divF.style.backgroundColor = 'yellow'
         break
      case 'secondClick':
         divS.style.backgroundColor = 'green'
         break
      default:
         divF.style.backgroundColor = 'white'
         divS.style.backgroundColor = 'white'
         break
   }
}
ctxMenu.addEventListener('click', function (e) {
   let element = e.target;
   // if (element.tagName != 'p') console.log('idName')
   let idName = element.id
   menuClick(idName)
})