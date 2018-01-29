var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0;
let characterCounter = 0;
let splitSentence = sentences[sentenceCounter].split('');
numberOfWords = sentences[0].length + sentences[1].length + sentences[2].length + sentences[3].length + sentences[4].length;
numberOfMistakes = 0;
const wordsPerMinute = numberOfWords / minutes - 2 * numberOfMistakes


var displaySentence = splitSentence.map((character, index) => {
    return `<span id="target-${index}">${character}</span>`;
}).join('');

$(document).ready(function () {
let $upper = $('#keyboard-upper-container')
let $lower = $('#keyboard-lower-container')
let shifted = false;
$('#glyph').append('<p><span class="glyphicon glyphicon-thumbs-up"></span></p>');
$('#glyph').append('<p><span class="glyphicon glyphicon-thumbs-down"></span></p>');
$('#target-0').css('background-color', 'yellow')
$('#keyboard-upper-container').hide();
console.log(shifted)
$(document).keydown(function( event ) {
    if ( event.keyCode === 16 ) {
      $($lower).hide();
      $($upper).show();
      shifted = true;
      console.log(shifted);
    }
    });
    $(document).keyup(function( event ) {
        if ( event.keyCode === 16) {
            $($lower).show();
            $($upper).hide();
            shifted = false;
            console.log(shifted);
        }
    });
    const nextSentence = () => {
    var displaySentence = splitSentence.map((character, index) => {
        return `<span id="target-${index}">${character}</span>`;
    }).join('');
    }
    
    $('#sentence').append(displaySentence);
    $(document).keypress(function(event) {
        $("#" + (event.keyCode)).css('background-color', 'yellow');
        
        if (characterCounter === splitSentence.length) {
            $('#sentence').empty();
            sentenceCounter = sentenceCounter + 1;
            splitSentence = sentences[sentenceCounter].split('');
            console.log(sentenceCounter)
            console.log(splitSentence)
            var displaySentence = splitSentence.map((character, index) => {
                return `<span id="target-${index}">${character}</span>`;
            }).join('');
            console.log(displaySentence)
            $('#sentence').append(displaySentence)
            characterCounter = 0;
            console.log()
        }
         if (String.fromCharCode(event.keyCode) === document.getElementById('target-' + characterCounter).innerHTML) {
            characterCounter = characterCounter + 1;
            $('#target-' + characterCounter).css('background-color', 'yellow')
            $('#target-' + (characterCounter - 1)).css('background-color', '')
            $('.glyphicon-thumbs-up').fadeIn();
            $('.glyphicon-thumbs-up').fadeOut();
            return;
        } else {
            $('.glyphicon-thumbs-down').fadeIn();
            $('.glyphicon-thumbs-down').fadeOut();
            numberOfMistakes ++;
        }
    });
    $(document).keyup(function (event)  {
        $("#" + (event.keyCode)).css('background-color', '')
        $("#" + (event.keyCode + 32)).css('background-color', '')
    });
});