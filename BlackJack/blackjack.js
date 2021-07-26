let display = document.querySelector("#playerHand");
let win = document.querySelector("#win");
let playerSum = document.querySelector("#playerSum");

let deck = [];

document.querySelector("#hold").style.display = "none";
document.querySelector("#draw").style.display = "none";
document.querySelector("#yourcards").style.display = "none";
document.querySelector("#yoursum").style.display = "none";


function startGame()
{
    setDeck();

    player = [drawcard(), drawcard()];
    dealer = [drawcard(), drawcard()];
    
    display.textContent = showCards(player);
    playerSum.textContent = sum(player);
    playerlose = false; 
    dealerlose = false;
    win.textContent = "";
    //allows player to use the hold and draw buttons
    reset();
    //sets the players cards to green if their sum is 21
    if(sum(player) == 21)
    {
        document.querySelector("#yoursum").style.color = "rgb(24, 61, 7)";
        document.querySelector("#playerSum").style.color = "rgb(24, 61, 7)";
    }

}

function reset()
{
    document.querySelector("#start").textContent = "Play Again?"
    document.querySelector("#start").style.display = "none";
    document.querySelector("#hold").style.display = "block";
    document.querySelector("#draw").style.display = "block";
    document.querySelector("#yourcards").style.display = "block";
    document.querySelector("#yoursum").style.display = "block";
    document.querySelector("#yoursum").style.color = "goldenrod";
    document.querySelector("#playerSum").style.color = "goldenrod";
    // deck = baseDeck;
}

function draw()
{ 
    //player draws a card
    if(sum(player) <= 21 && dealerlose == false && playerlose == false)
    {
        player[player.length] = drawcard();
    }
    if(sum(player) == 21)
    {
        document.querySelector("#yoursum").style.color = "rgb(24, 61, 7)";
        document.querySelector("#playerSum").style.color = "rgb(24, 61, 7)";
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
    //dealer draws until reaching 19
    if(playerlose == false)
    {
        while(sum(dealer) < 19)
        {
            dealer[dealer.length] = drawcard();
        }
        winner();
    }
  
}

function winner()
{
    //if player surpasses 21 they lose
    if(sum(player) > 21)
    {  
        document.querySelector("#yoursum").style.color = "red";
        document.querySelector("#playerSum").style.color = "red";
        win.textContent = "House wins." 
        win.textContent += " Dealer's hand: " + showCards(dealer);  
        playerlose = true;
    }
    // if dealer surpasses 21 they lose
    else if(sum(dealer) > 21)
    {
        win.textContent = "YOU WIN!";
        win.textContent += " Dealer's hand: " + showCards(dealer);
        dealerlose = true;
    }
    else if(sum(player) > sum(dealer))
    {     
        win.textContent = "YOU WIN!";
        win.textContent += " Dealer's hand: " + showCards(dealer);
        dealerlose = true;
    }
    else
    {
        win.textContent = "House wins.";
        win.textContent += " Dealer's hand: " + showCards(dealer); 
        playerlose = true;
    }

    document.querySelector("#start").style.display = "block";
    document.querySelector("#hold").style.display = "none";
    document.querySelector("#draw").style.display = "none";
}

//returns an array of cards given an input player
function cards(player)
{
    let cards = [];
    for(let i = 0; i < player.length; i++)
        cards[i] = player[i].value;

    return cards;
}

function drawcard()
{
    //get a random card from the deck
    let randomCardNum = Math.floor(Math.random() * (deck.length-1));
    let card = deck[randomCardNum];

    //remove the card from the deck and move the other cards;
    for(let i = randomCardNum; i < deck.length - 1; i++)
    {
        deck[i] = deck[i+1];
    }
    deck.pop();

    return card;
}
//returns the sum of the "values" of each card
function sum(hand)
{   let aces = [];
    let sum = 0;
    for(let i = 0; i < hand.length; i++)
    {
        if(hand[i].value == 11)
        {
            aces.push(i);
        }
        sum += hand[i].value;
        if(sum > 21 && aces.length > 0)
        {
            let x = aces.pop();
            hand[x].value = 1;
            if(i <= x)
            {
                sum -= 10;
            }
        }
    }
    return sum;
}
// returns a string containing the "name"s of each card separated by commas
function showCards(player)
{
    let show = "";
    for(let i = 0; i < player.length; i++)
    {
        show += player[i].name;// + " : " + player[i].suit;
        if(i + 1 != player.length)
        {
            show += ", ";
        }
    }
    return show;
}

//fills the deck with cards
function setDeck()
{
    deck = [];
    // for(let i = 2; i < 12; i++)
    // {
    //     for(let j = 0; j < 4; j++)
    //     {
    //         deck[deck.length] = {number: i , suit: j}
    //     }
    // }

    //for every card number Ace, 2..King
    for(let i = 1; i < 14; i++)//1 to 14
    {
        //for every suit spades, clubs, hearts, diamonds
        for(let j = 0; j < 4; j++)
        {
            //create a card and add it to the deck
            deck[deck.length] = makeCards(i,j);
            //check the card
            // console.log(deck[deck.length - 1]);
        }
    }
}
//creates a card based on a "number" number and a "suit" number
function makeCards(num, suitNumber)
{
    let card = {number:num, suit: "error", name: "error", value: 0};
    switch (suitNumber)
    {
        case 0:
            card.suit = "clubs";
            break;
        case 1:
            card.suit = "spades";
            break;
        case 2:
            card.suit = "diamonds";
            break;
        case 3:
            card.suit = "hearts";
        break;
        default:
            alert("error producing suit for a card. Please inform Thomas");
    }
    switch (num)
    {
        case 1:
            card.name="Ace";
            break;
        case 11:
            card.name="Jack";
            break;
        case 12:
            card.name="Queen";
            break;
        case 13:
            card.name="King";
            break;
        default:
            card.name= num.toString();
            break;               
    }
    if(num > 10)
    {
        card.value = 10;  
    }
    else if (num == 1)
    {
        card.value = 11;
    }
    else
    {
        card.value = num;
    }
    // console.log(card);
    return card;
}
function back()
{
    window.open("../projects.html", "_self");
}
