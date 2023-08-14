let cards = []
let hasblackjack = false;
let sum = 0;
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")       // this same as getelement but we can use it in wider perspective here you can change the whole body
let cardEl = document.querySelector("#card-el")
let player={
    name: "Nikhil",
    chips:100
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent=player.name + ":Rs " + player.chips
function startgame(){
    isAlive = true;
    let firstcard=getrandomcard()
    let secondcard= getrandomcard()
    cards = [firstcard,secondcard]
    sum = firstcard+secondcard
    rendergame()
}
function rendergame(){
    
    cardEl.textContent = "Cards : "
    for (let index = 0; index < cards.length; index++) { 
        cardEl.textContent +=" "+cards[index]+" "
    }
    sumEl.textContent = "Sum: " +sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "You have got blackjack!"
        hasblackjack = true
    }
    else{
        message = "You are out!"
        isAlive = false
    }
    messageEl.textContent = message
    
}
function newCard(){
    if(isAlive== true && hasblackjack=== false){
    let card = getrandomcard()
    sum += card
    cards.push(card)
    cardEl.textContent += " "+card
    rendergame()
    }
}
function getrandomcard(){
    let randomCard = Math.floor(Math.random() * 10) + 1
    return randomCard
}
