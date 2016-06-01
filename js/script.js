// If anyone has any tips on how I can improve my code feel free to message me. I'd love to hear from you and I would be very greatful for some feed back on better techniques. Thanks for stopping by!


// TAP BUTTON FUNCTION
document.getElementById("green").onmouseover = function() {mouseOver()};

document.getElementById("green").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("green").style.color = "green";
}

function mouseOut() {
    document.getElementById("green").style.color = "white";
}

// FULL BUTTON FUNCTION
document.getElementById("green-two").onmouseover = function() {mouseOver_full()};

document.getElementById("green-two").onmouseout = function() {mouseOut_full()};

function mouseOver_full() {
    document.getElementById("green-two").style.color = " #009900";
}

function mouseOut_full() {
    document.getElementById("green-two").style.color = "white";
}


// SIXTEEN LEVEL BUTTON FUNCTION
document.getElementById("orange").onmouseover = function() {mouseOver_erase()};

document.getElementById("orange").onmouseout = function() {mouseOut_erase()};

function mouseOver_erase() {
    document.getElementById("orange").style.color = "#cc3300";
}

function mouseOut_erase() {
    document.getElementById("orange").style.color = "white";
}


// ERASE BUTTON FUNCTION
document.getElementById("red").onmouseover = function() {mouseOver_sixteen()};

document.getElementById("red").onmouseout = function() {mouseOut_sixteen()};

function mouseOver_sixteen() {
    document.getElementById("red").style.color = "#b30000";
}

function mouseOut_sixteen() {
    document.getElementById("red").style.color = "white";
}


// NOTE REPEAT BUTTON FUNCTION
document.getElementById("blue").onmouseover = function() {mouseOver_repeat()};

document.getElementById("blue").onmouseout = function() {mouseOut_repeat()};

function mouseOver_repeat() {
    document.getElementById("blue").style.color = "#4d4dff";
}

function mouseOut_repeat() {
    document.getElementById("blue").style.color = "white";
}


// PAD ONE AUDIO/COLOR PROPERTIES
 
document.getElementById('p1').onmouseover = function() {padOneClick()};
document.getElementById('p1').onmouseout = function() {padOneOut()};

function padOneClick() {
  document.getElementById('p1').style.color='#ff0000';

}

function padOneOut() {
  document.getElementById('p1').style.color='black';

}


// PAD BACKGROUND COLOR CHANGE
document.getElementById('p1').onclick = function() {padOneClick()};
document.getElementById('p1').onmouseout = function() {padOneOut()};

function padOneClick() {
  document.getElementById('p1').style.color='#ff0000';

}

function padOneOut() {
  document.getElementById('p1').style.color='black';

}

 
// PAD TWO AUDIO/COLOR PROPERTIES
 
document.getElementById('p2').onmouseover = function() {padTwoClick()};
document.getElementById('p2').onmouseout = function() {padTwoOut()};

function padTwoClick() {
  document.getElementById('p2').style.color='#ff4000';

}

function padTwoOut() {
  document.getElementById('p2').style.color='black';

}

// PAD THREE AUDIO/COLOR PROPERTIES
 
document.getElementById('p3').onmouseover = function() {padThreeClick()};
document.getElementById('p3').onmouseout = function() {padThreeOut()};

function padThreeClick() {
  document.getElementById('p3').style.color='#ff8000';

}

function padThreeOut() {
  document.getElementById('p3').style.color='black';

}

// PAD FOUR AUDIO PROPERTIES
 
document.getElementById('p4').onmouseover = function() {padFourClick()};
document.getElementById('p4').onmouseout = function() {padFourOut()};

function padFourClick() {
  document.getElementById('p4').style.color='	#00ffbf';

}

function padFourOut() {
  document.getElementById('p4').style.color='black';

}

// PAD FIVE AUDIO PROPERTIES
 
document.getElementById('p5').onmouseover = function() {padFiveClick()};
document.getElementById('p5').onmouseout = function() {padFiveOut()};

function padFiveClick() {
  document.getElementById('p5').style.color='#00ffff';

}

function padFiveOut() {
  document.getElementById('p5').style.color='black';

}

// PAD SIX AUDIO PROPERTIES
 
document.getElementById('p6').onmouseover = function() {padSixClick()};
document.getElementById('p6').onmouseout = function() {padSixOut()};

function padSixClick() {
  document.getElementById('p6').style.color='#00bfff';

}

function padSixOut() {
  document.getElementById('p6').style.color='black';

}

// PAD Seven AUDIO PROPERTIES
 
document.getElementById('p7').onmouseover = function() {padSevenClick()};
document.getElementById('p7').onmouseout = function() {padSevenOut()};

function padSevenClick() {
  document.getElementById('p7').style.color='	#8000ff';

}

function padSevenOut() {
  document.getElementById('p7').style.color='black';

}

// PAD Eight AUDIO PROPERTIES
 
document.getElementById('p8').onmouseover = function() {padEightClick()};
document.getElementById('p8').onmouseout = function() {padEightOut()};

function padEightClick() {
  document.getElementById('p8').style.color='#bf00ff';

}

function padEightOut() {
  document.getElementById('p8').style.color='black';

}


// PAD NINE AUDIO PROPERTIES
 
document.getElementById('p9').onmouseover = function() {padNineClick()};
document.getElementById('p9').onmouseout = function() {padNineOut()};

function padNineClick() {
  document.getElementById('p9').style.color='#ff0080';

}

function padNineOut() {
  document.getElementById('p9').style.color='black';

}

// PAD ONE AUDIO PROPERTIES
 
function play() {
    var audio = document.getElementById('audio1');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playA() {
    var audio = document.getElementById('audio2');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playB() {
    var audio = document.getElementById('audio3');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playC() {
    var audio = document.getElementById('audio4');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playD() {
    var audio = document.getElementById('audio5');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playE() {
    var audio = document.getElementById('audio6');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playF() {
    var audio = document.getElementById('audio7');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playG() {
    var audio = document.getElementById('audio8');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

function playH() {
    var audio = document.getElementById('audio9');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}