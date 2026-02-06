

function yenToUSD(num1){
    console.log("The total in USD is" + " " + ((num1 / 1000) * 7));

}

const result = yenToUSD(140000)


function letsJam() {
    console.log("3");
    console.log("2");
    console.log("1");
    console.log("Let's Jam! (Watch Cowboy Bebop if you haven't!)");

}

const tank = letsJam()

tank;

const xbox = {
  type: "Xbox Series X",
  consoleShape: "fridge-shaped",
  releaseYear: 2020,
  consoleColor: "black",
  fullSpecs: function(){
    console.log("The " + this.type + " is a " + this.consoleColor + ", " + this.consoleShape + " console that released in " + this.releaseYear) 
  }
};

xbox.fullSpecs();


