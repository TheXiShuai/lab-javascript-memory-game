class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    
    if(this.cards === undefined) {
        return undefined
    }

    for (let index = 0; index < this.cards.length; index++) {
      const temporary = this.cards[index];
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      

      this.cards[index] = this.cards[randomIndex];
      this.cards[randomIndex] = temporary;
  }
    return this.cards



    // ... write your code here
  }

  checkIfPair(card1, card2) {

    this.pairsClicked = this.pairsClicked + 1

    if(card1 === card2){
      this.pairsGuessed =   this.pairsGuessed + 1
      return true
    }

    if(card1 !== card2){
      return false  
    }
  }


 

  checkIfFinished() {

    if(this.cards.length / 2 === this.pairsGuessed){

      return true
    }
    else{
    return false
    } 
    // ... write your code here
  }
}
