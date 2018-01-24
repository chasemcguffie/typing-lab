$(document).ready(function () {
let $upper = $('#keyboard-upper-container')
let $lower = $('#keyboard-lower-container')
let shifted = false;
$('#keyboard-upper-container').hide();
console.log(shifted)
$(document).keydown(function( event ) {
    if ( event.keyCode === 16 ) {
      $($lower).hide();
      $($upper).show();
      shifted = true;
      console.log(shifted)
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
    $(document).keydown(function(event) {
        if (shifted == false) 
        {
            for (i = 48; i < 57; i++) {
                if (event.keyCode == i) 
                {
                    $("#" + (i)).css('background-color', 'yellow');
                }
            }
        $("#" + (event.keyCode + 32)).css('background-color', 'yellow');
        } else {
        $("#" + (event.keyCode)).css('background-color', 'yellow');
        }
    });
    $(document).keyup(function(event) {
        if (shifted == false) {
            for (i = 48; i < 57; i++){
                if (event.keyCode == i) {
                    $("#" + (i)).css('background-color', '');
                }
            }
        $("#" + (event.keyCode + 32)).css('background-color', '');
    } else {
        $("#" + (event.keyCode)).css('background-color', '');
    }
    });
}

);