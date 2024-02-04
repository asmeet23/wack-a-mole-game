 let currentMoleTile;
 let currentPlantTile;
 let score = 0;
 let gameOver = false;

 window.onload = function() {
    setGame();
 }

 function setGame() {
    // grid setup 
    // 9 tiles are being created and ids are being assigned to them 
    for(let i=0; i<9; i++){
        let tile = document.createElement('div');
        tile.id = i.toString();
        // inserting the tiles into the board 
        tile.addEventListener('click', selectTile);
        document.getElementById('board').appendChild(tile);

        // getting the mole every 1 second 
        setInterval(setMole, 2000);
        setInterval(setPlant, 3000);
    }

 }

 function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
 }

 function setMole(){
    if(gameOver){
        return;
    }

    // if the tile has a mole then innerhtml clears 

    if(currentMoleTile){
        currentMoleTile.innerHTML = '';
    }

    let mole = document.createElement('img');
    mole.src = "/images/monty-mole.png"; 
    

    let num = getRandomTile();
    if(currentPlantTile && currentMoleTile.id == num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
 }

 function setPlant(){
    if(gameOver){
        return;
    }

    if(currentPlantTile){
        currentPlantTile.innerHTML = '';
    }

    let plant = document.createElement('img');
    plant.src = "/images/piranha-plant.png";

    let num = getRandomTile();
    if(currentPlantTile && currentMoleTile.id == num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
 }

 function selectTile(){
    if(gameOver){
        return;
    }

    if(this == currentMoleTile){
        score += 100;
        document.getElementById('score').innerHTML = score.toString();
    }
    else if(this == currentPlantTile){
        document.getElementById('score').innerHTML = "GAME OVER! "+score.toString();
        gameOver = true;    
    }
 }
