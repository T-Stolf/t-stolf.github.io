//  // suit: hearts = 0, diamonds = 1, spades = 2, clubs = 3
//  //player: 0 = dealer 1...n = players
//  let player = [drawcard(), drawcard()];
//  let dealer = [drawcard(), drawcard()];
// // console.log(player);
// // console.log("player "  +  sum(player));

let display = document.querySelector("#playerHand");
let win = document.querySelector("#win");
let playerSum = document.querySelector("#playerSum");

// display.textContent = cards(player);

// let playerlose = false;
// let dealerlose = false;

function draw()
{ 
    //player draws a card
    if(sum(player) <= 21 && dealerlose == false && playerlose == false)
    {
        player[player.length] = drawcard();
    }
    if(sum(player) > 21)
    {
        winner();
    }
    //onscreen text updated to display total of players cards
    display.textContent = showCards(player);
    playerSum.textContent = sum(player);
} 

function hold()
{
    //dealer draws untilreaching 19
    while(sum(dealer) < 19)
    {
        dealer[dealer.length] = drawcard();
    }
    winner();
  
}
function startGame()
{
    player = [drawcard(), drawcard()];
    dealer = [drawcard(), drawcard()];
    display.textContent = showCards(player);
    playerSum.textContent = sum(player);
    playerlose = false; 
    dealerlose = false;
    win.textContent = "";

    document.querySelector("#start").textContent = "Play Again?"
}

function winner()
{
    //if player surpasses 21 they lose
    if(sum(player) > 21)
    {  
        win.textContent = "dealer wins!" 
        win.textContent += " dealer hand: " + cards(dealer);  
        playerlose = true;
    }
    // if dealer surpasses 21 they lose
    else if(sum(dealer) > 21)
    {
        win.textContent = "player wins!";
        win.textContent += " dealer hand: " + cards(dealer);
        dealerlose = true;
    }
    else if(sum(player) > sum(dealer))
    {     
        win.textContent = "player wins!";
        win.textContent += " dealer hand: " + cards(dealer);
        dealerlose = true;
    }
    else
    {
        win.textContent = "dealer wins!";
        win.textContent += " dealer hand: " + cards(dealer); 
        playerlose = true;
    }
}
function cards(player)
{
    let cards = [];
    for(let i = 0; i < player.length; i++)
        cards[i] = player[i].number;

    return cards;
}

function drawcard()
{
    let card = { 
        number: (Math.floor(Math.random() * 12) + 2), 
        suit: (Math.floor(Math.random() * 4)) 
        }
    return card;
}
function sum(hand)
{
    let sum = 0;
    for(let i = 0; i < hand.length; i++)
    {
        sum += hand[i].number;
    }
    return sum;
}
function showCards(player)
{
    let show = "";
    for(let i = 0; i < player.length; i++)
    {
        show += player[i].number;
        if(i + 1 != player.length)
        {
            show += ", ";
        }

    }
    return show;
}