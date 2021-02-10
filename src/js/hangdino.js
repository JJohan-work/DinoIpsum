/*eslint-disable*/
export class HangDino {
  constructor(){
    this.userInput;
    this.dinoWord;
    this.hiddenWord;
    this.foundLetters = [];
    this.wrongLetters = [];
  }
  
  saveInput(userInput) {
    this.userInput = userInput;
  }

  saveDino(name) {
    this.dinoWord = name.toLowerCase();
    this.hiddenWord = "-".repeat(name.length);
  }

  checkLetter(check){
    const wordArray = this.dinoWord.split(" ").slice(0,1);
    console.log(wordArray);
    wordArray.forEach((letter, index) => {
      if (letter === check ) {
        switch(this.foundLetters) {
          case(this.foundLetters.includes(index)):
            console.log("You've already pressed this1");
            break;
          case(this.wrongLetters.includes(index)):
            console.log("You've already pressed this");
            break;
          case(!this.foundLetters.includes(index)):
            this.foundLetters.push(index);
            break;
          case(!this.wrongLetters.includes(index)):
            this.wrongLetters.push(index);
        }
      }
    });
  }
}
/*eslint-disable*/

// if(this.foundLetters.includes(index)){
//   this.foundLetters.push(index);
//   console.log(this.dinoWord);
//   // console.log(this.foundLetters);
// } else { 
//   console.log("You've already pressed this1");
// } 
// } else {
// if (this.wrongLetters.includes(index)) {
// this.wrongLetters.push(index);
// } else {
// console.log("You've already pressed this2");
// }

 // && !this.foundLetters.includes(index) && !this.wrongLetters.includes(index)