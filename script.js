var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceCounter = 0;
let characterCounter = 0;


$(document).ready(function () {
let $upper = $('#keyboard-upper-container')
let $lower = $('#keyboard-lower-container')
let shifted = false;

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
    let splitSentence = sentences[sentenceCounter].split('');

    var displaySentence = splitSentence.map((character, index) => {
        return `<span id="target-${index}">${character}</span>`;
    }).join('');
    if (characterCounter == displaySentence.length) {
        $('#sentence').empty();
        sentenceCounter = sentenceCounter + 1;
        displaySentence = sentences[sentenceCounter];
    }
    $('#sentence').append(displaySentence);
    $(document).keypress(function(event) {
        //console.log(document.getElementById('target-' + characterCounter));
        $("#" + (event.keyCode)).css('background-color', 'yellow');
        if (String.fromCharCode(event.keyCode) === document.getElementById('target-' + characterCounter).innerHTML) {
            characterCounter = characterCounter + 1;
            $('#target-' + characterCounter).css('background-color', 'yellow')
            $('#target-' + (characterCounter - 1)).css('background-color', '')
        }
    });
    $(document).keyup(function (event)  {
        $("#" + (event.keyCode)).css('background-color', '')
        $("#" + (event.keyCode + 32)).css('background-color', '')
    });
});