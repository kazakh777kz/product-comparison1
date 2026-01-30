function filterTable() {
  var select = document.getElementById("productSelect");
  var value = select.value;
  var table = document.getElementById("comparisonTable");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var product = rows[i].cells[0].innerText;
    if (product === value) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// Инициализация при загрузке страницы
window.onload = function() {
  filterTable();
};
