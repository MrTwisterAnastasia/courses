document.getElementById('myslide').onmousemove = function (event) {
   let x = event.offsetX;

   document.getElementById('two').style.width = x + 'px'
}