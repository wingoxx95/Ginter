function menu_in() {
  var menu_block = document.getElementById("menu_block");
  var hidden_block = document.getElementById("hidden_block");

  menu_block.style.backgroundColor = "#000000";
  hidden_block.style.display = "block";
}
function menu_out() {
  var menu_block = document.getElementById("menu_block");
  var hidden_block = document.getElementById("hidden_block");
  var hit_box = document.getElementById("hit_box");

  hit_box.addEventListener(
    "onclick",
    (menu_block.style.backgroundColor = "#14213d") &
      (hidden_block.style.display = "none")
  );
}
