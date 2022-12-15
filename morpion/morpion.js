var dataa = document.querySelectorAll(".case");
console.log(dataa);

for (let dataaa of dataa) {
  dataaa.addEventListener("click", check);
}

var click = 0;

function check() {
  console.log(this.dataset.class);
  if (this.textContent == "") {
    click++;
    if (click % 2 == 0) {
      this.textContent = "X";
    } else {
      this.textContent = "O";
    }
  } else {
  }

}