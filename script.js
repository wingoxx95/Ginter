function menu_in() {
  var element = document.getElementById("menu_block");
  var element_1 = document.getElementById("hidden_block");

  element.addEventListener(
    "onmouseover",
    (element.style.backgroundColor = "red") &
      (element_1.style.display = "block")
  );
}
function menu_out() {
  var element = document.getElementById("menu_block");
  var element_1 = document.getElementById("hidden_block");

  element.addEventListener(
    "onmouseout",
    (element.style.backgroundColor = "#14213d") &
      (element_1.style.display = "none")
  );
}
