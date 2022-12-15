var dataa = document.querySelectorAll('.case')
console.log(dataa)



for(let dataaa of dataa){
    dataaa.addEventListener('click', check)
}


var click = 0

function check(){

 console.log(this.dataset.class)

click++

 if (click % 2 == 0 ){
    this.textContent = 'O'

 }else {
    this.textContent = 'X'
 }

 }

 
 





