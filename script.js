let playerOneNumber = document.querySelector('.player__one__input')
let playerOneBtn = document.querySelector('.player__one__btn')
let playerTwoNumber = document.querySelector('.player__two__input')
let playerTwoBtn = document.querySelector('.player__two__btn')
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let error = document.querySelector('.error')

let pAttemp = 0;

playerOneBtn.addEventListener('click',function(){
    let p1Number = playerOneNumber.value;
    if(Boolean(p1Number -10) && p1Number !=''){
        if(p1Number < 10 ){
            player2.style.display ='block'
            player1.style.display ='none'
        }else{
            error.innerHTML= 'Please Give me a number Less then 10'
        }
    }else{
        error.innerHTML= 'Please Give Me a Number'
    }

})

playerTwoBtn.addEventListener('click',function(){
    let p2Number =playerTwoNumber.value
    pAttemp++
    if(pAttemp <=5 ){
        if(playerOneNumber.value == p2Number){
            error.innerHTML= 'Player Two Winner '
        }else if(pAttemp == 5 && playerOneNumber.value != playerTwoNumber.value){
            error.innerHTML= 'Player One Winner '
        }
          
    }
})