let table = document.querySelector('table')
let tbody = document.querySelector('tbody')
let rows = [].slice.call(tbody.rows)

let countClick = 0

function sortRows(index, type) {
   let compare = function (rowA, rowB) {
      rowAData = rowA.cells[index].innerHTML
      rowBData = rowB.cells[index].innerHTML

      switch (type) {
         case 'numberHeader':
            return rowAData - rowBData
            break;
         default:
            if (rowAData < rowBData) return -1;
            else if (rowAData > rowBData) return 1;
            return 0;
            break
      }
   }


   if (countClick % 2 == 0) {
      rows.sort(compare)
      table.removeChild(tbody)
      for (let i = 0; i < rows.length; i++) {
         tbody.appendChild(rows[i])
      }
      table.appendChild(tbody)

   } else {
      rows.sort(compare).reverse()

      table.removeChild(tbody)
      for (let i = 0; i < rows.length; i++) {
         tbody.appendChild(rows[i])
      }
      table.appendChild(tbody)

   }

   countClick++

}
table.addEventListener('click', (e) => {
   const el = e.target;
   if (el == 'TH') console.log('hi');
   const index = el.cellIndex;
   const type = el.className;

   sortRows(index, type)
})