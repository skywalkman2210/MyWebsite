/*
var nouns = ['soon', 'in the near future' ,'live']
var nounCounter = 0;

function changeNoun() {
  $('#live').text(nouns[nounCounter]);
  nounCounter++;
  
  if (nounCounter > nouns.length) {
    nounCounter = 0;
  }
  
  $('#mainParagraph')
    .fadeOut(2000, changeNoun())
    .delay(1000)
    .fadeIn(2000);
}
*/

$(document).ready(function() {
  //changeNoun();
  $('#mainParagraph')
    .fadeOut(2000)
    .delay(1000)
    .fadeIn(2000);
});