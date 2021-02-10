import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './js/dino.js';
import {HangDino} from './js/hangdino.js';


$(document).ready(function() {
  const hangDino = new HangDino;

  document.addEventListener('keydown', function(event) {
    // function getLetter() {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      hangDino.saveInput(event.key); 
      hangDino.checkLetter(event.key);
    // }
    }
  });

  let promise = Dino.getWord();
  promise.then(function(response) {
    const dinoWord = JSON.parse(response);
    hangDino.saveDino(dinoWord[0]);
    $('#word').text(hangDino.hiddenWord);
  }, function(error) {
    console.log(`There was an error: ${error}`);
  });
});