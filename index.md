<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JackBlack</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="title">
        <img src="jackblack.jpg" class="jackblack"> <span class="txt"> JackBlack </span> <img src="jackblack.jpg" class="jackblack">
    </div>

    <div class="gamearea">
        <div id="yourcards">Your Cards: </div>
        <div id="playerHand"></div>
        <div id="yoursum">Sum:</div>
        <div id="playerSum"></div>
        <button id="draw" onclick="draw()">Draw
        </button>
        <button id="hold" onclick="hold()">Hold
        </button>
        <p id="win"></p>
        <button id="start" onclick="startGame()">Start Game</button>
    </div>

    <script src="blackjack.js"></script>
</body>
</html>
