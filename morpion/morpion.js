var dataa = document.querySelectorAll(".case");
var win = false;
var joueur = document.querySelector('#joueur')


var etat = ["", "", "", "", "", "", "", "", ""];
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
        joueur.textContent = 'C\'est au tour du joueur1'
        this.textContent = "X";
        etat.splice(this.dataset.class, 1, "X");
    } else {
        joueur.textContent = 'C\'est au tour du joueur2'
        this.textContent = "O";
        etat.splice(this.dataset.class, 1, "O");
    }
  }
  if (etat[0] == etat[1] && etat[2] == etat[1] && etat[0] != "") { 
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[0].style.backgroundColor = 'green'
      dataa[1].style.backgroundColor = 'green'
      dataa[2].style.backgroundColor = 'green'
  } else if (etat[3] == etat[4] && etat[5] == etat[4] && etat[3] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[3].style.backgroundColor = 'green'
      dataa[4].style.backgroundColor = 'green'
      dataa[5].style.backgroundColor = 'green'
  } else if (etat[6] == etat[7] && etat[8] == etat[7] && etat[6] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[6].style.backgroundColor = 'green'
      dataa[7].style.backgroundColor = 'green'
      dataa[8].style.backgroundColor = 'green'
  } else if (etat[0] == etat[3] && etat[6] == etat[3] && etat[0] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[0].style.backgroundColor = 'green'
      dataa[3].style.backgroundColor = 'green'
      dataa[6].style.backgroundColor = 'green'
  } else if (etat[1] == etat[4] && etat[7] == etat[4] && etat[1] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[1].style.backgroundColor = 'green'
      dataa[4].style.backgroundColor = 'green'
      dataa[7].style.backgroundColor = 'green'
  } else if (etat[2] == etat[5] && etat[8] == etat[5] && etat[2] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[2].style.backgroundColor = 'green'
      dataa[5].style.backgroundColor = 'green'
      dataa[8].style.backgroundColor = 'green'
  } else if (etat[0] == etat[4] && etat[8] == etat[4] && etat[0] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[0].style.backgroundColor = 'green'
      dataa[4].style.backgroundColor = 'green'
      dataa[8].style.backgroundColor = 'green'
  } else if (etat[2] == etat[4] && etat[6] == etat[4] && etat[2] != "") {
      joueur.textContent = etat[0] == 'X' ? 'C\'est le joueur 1 qui à gagnez' : 'C\'est le joueur 2 qui à gagnez';
      win = true;
      dataa[2].style.backgroundColor = 'green'
      dataa[4].style.backgroundColor = 'green'
      dataa[6].style.backgroundColor = 'green'
  } else if (!etat.includes("")) {
      joueur.textContent = 'Match nul'
      for (let dataaa of dataa) {
        dataaa.style.backgroundColor = 'red'
      }
  }

  if (win == true) {
    for (let dataaa of dataa) {
      dataaa.removeEventListener("click", check);
    }
  }
}

function restart() {
  etat = ["", "", "", "", "", "", "", "", ""];
  for (let dataaa of dataa) {
    dataaa.textContent = "";
    dataaa.addEventListener("click", check);
    dataaa.style.backgroundColor = 'white'
  }
  win = false


}
