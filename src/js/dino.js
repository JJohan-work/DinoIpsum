export default class Dino {
  constructor(word) {
    this.word = word;
  }

  static getWord() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = "https://hipsum.co/api/?type=hipster-centric&sentences=1";
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}