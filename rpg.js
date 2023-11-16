// selected the 3 buttons and assigning them to a variable each



// defined the computer selection using the Math.random and math.floor
function getComputerChoice(){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index]
};


