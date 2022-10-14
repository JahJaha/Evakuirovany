document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        32: 'drop'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

document.body.onclick = function( e ) {
    var keys = {
        button2: 'left',
        button3: 'right',
        button4: 'down',
        button1: 'rotate',
        button5: 'drop'
    };

    // e.preventDefault();
    if (typeof keys[ e.target.className ] != 'undefined') {
        keyPress( keys[ e.target.className ] );
        render();
    };
    e.preventDefault();
};


