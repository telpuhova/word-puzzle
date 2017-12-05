$(document).ready(function(){
  $(".puzzle").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();
    sentence = sentence.toLowerCase();
    var sentenceArray = sentence.split('');

    for (var index = 0; index < sentenceArray.length; index += 1) {
      if ((sentenceArray[index] === 'a') || (sentenceArray[index] === 'o') || (sentenceArray[index] === 'e') || (sentenceArray[index] === 'i') || (sentenceArray[index] === 'u') || (sentenceArray[index] === 'y')) {
        sentenceArray[index] = '-';
      }
    }

    sentence = sentenceArray.join('')

    $("#output").text(sentence);

    $(".output").show();
    $(".numbers").hide();
  })
})
