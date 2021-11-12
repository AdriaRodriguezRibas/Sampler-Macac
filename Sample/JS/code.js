document.getElementById("so1").onclick = playpauseaudio1;

function playpauseaudio1() {
    if (document.getElementById("audio1").paused) {
        document.getElementById("audio1").play();
        document.getElementById("vid").play();
    } else {
        document.getElementById("audio1").pause();
        document.getElementById("vid").pause();
    }
}

document.getElementById("volum1").value =
    document.getElementById("audio1").volume;

document.getElementById("volum1").oninput = canviavolum1;

function canviavolum1() {
    document.getElementById("audio1").volume =
        document.getElementById("volum1").value;
}


document.getElementById("audio1").oncanplay = actualitzaMaxDuracio1;

function actualitzaMaxDuracio1() {
    document.getElementById("duracio1").max = document.getElementById("audio1").duration;
}
document.getElementById("duracio1").oninput = temps1;

function temps1() {
    document.getElementById("audio1").currentTime =
        document.getElementById("duracio1").value;
}

document.getElementById("audio1").ontimeupdate = actualitzaDuracio1;

function actualitzaDuracio1() {
    document.getElementById("duracio1").value = document.getElementById("audio1").currentTime;
    //console.log(document.getElementById("duracio1").value +" - "+ document.getElementById("duracio1").max);
}

document.getElementById("loop1").onclick = playloop1;

function playloop1() {
    if (document.getElementById("audio1").loop == false) {
        document.getElementById("audio1").loop = true;
    }else{
       document.getElementById("audio1").loop = false ;
    }
}

document.getElementById("so2").onclick = playpauseaudio2;

function playpauseaudio2() {
    if (document.getElementById("audio2").paused) {
        document.getElementById("audio2").play();
    } else {
        document.getElementById("audio2").pause();
    }
}

document.getElementById("volum2").value =
    document.getElementById("audio2").volume;

document.getElementById("volum2").oninput = canviavolum2;

function canviavolum2() {
    document.getElementById("audio2").volume =
        document.getElementById("volum2").value;
}





document.getElementById("loop2").onclick = playloop2;

function playloop2() {
    if (document.getElementById("audio2").loop == false) {
        document.getElementById("audio2").loop = true;
    }else{
       document.getElementById("audio2").loop = false ;
    }
}

document.getElementById("so3").onclick = playpauseaudio3;

function playpauseaudio3() {
    if (document.getElementById("audio3").paused) {
        document.getElementById("audio3").play();
    } else {
        document.getElementById("audio3").pause();
    }
}

document.getElementById("volum3").value =
    document.getElementById("audio3").volume;

document.getElementById("volum3").oninput = canviavolum3;

function canviavolum3() {
    document.getElementById("audio3").volume =
        document.getElementById("volum3").value;
}




document.getElementById("loop3").onclick = playloop3;

function playloop3() {
    if (document.getElementById("audio3").loop == false) {
        document.getElementById("audio3").loop = true;
    }else{
       document.getElementById("audio3").loop = false ;
    }
}

document.getElementById("so4").onclick = playpauseaudio4;

function playpauseaudio4() {
    if (document.getElementById("audio4").paused) {
        document.getElementById("audio4").play();
    } else {
        document.getElementById("audio4").pause();
    }
}

document.getElementById("volum4").value =
    document.getElementById("audio4").volume;

document.getElementById("volum4").oninput = canviavolum4;

function canviavolum4() {
    document.getElementById("audio4").volume =
        document.getElementById("volum4").value;
}



document.getElementById("loop4").onclick = playloop4;

function playloop4() {
    if (document.getElementById("audio4").loop == false) {
        document.getElementById("audio4").loop = true;
    }else{
       document.getElementById("audio4").loop = false ;
    }
}
document.getElementById("so5").onclick = playpauseaudio5;

function playpauseaudio5() {
    if (document.getElementById("audio5").paused) {
        document.getElementById("audio5").play();
    } else {
        document.getElementById("audio5").pause();
    }
}

document.getElementById("volum5").value =
    document.getElementById("audio5").volume;

document.getElementById("volum5").oninput = canviavolum5;

function canviavolum5() {
    document.getElementById("audio5").volume =
        document.getElementById("volum5").value;
}



document.getElementById("loop5").onclick = playloop5;

function playloop5() {
    if (document.getElementById("audio5").loop == false) {
        document.getElementById("audio5").loop = true;
    }else{
       document.getElementById("audio5").loop = false ;
    }
}

document.getElementById("so6").onclick = playpauseaudio6;

function playpauseaudio6() {
    if (document.getElementById("audio6").paused) {
        document.getElementById("audio6").play();
    } else {
        document.getElementById("audio6").pause();
    }
}

document.getElementById("volum6").value =
    document.getElementById("audio6").volume;

document.getElementById("volum6").oninput = canviavolum6;

function canviavolum6() {
    document.getElementById("audio6").volume =
        document.getElementById("volum6").value;
}




function playloop6() {
    if (document.getElementById("audio6").loop == false) {
        document.getElementById("audio6").loop = true;
    }else{
       document.getElementById("audio6").loop = false ;
    }
}

document.getElementById("so7").onclick = playpauseaudio7;

function playpauseaudio7() {
    if (document.getElementById("audio7").paused) {
        document.getElementById("audio7").play();
    } else {
        document.getElementById("audio7").pause();
    }
}

document.getElementById("volum7").value =
    document.getElementById("audio7").volume;

document.getElementById("volum7").oninput = canviavolum7;

function canviavolum7() {
    document.getElementById("audio7").volume =
        document.getElementById("volum7").value;
}



document.getElementById("loop7").onclick = playloop7;

function playloop7() {
    if (document.getElementById("audio7").loop == false) {
        document.getElementById("audio7").loop = true;
    }else{
       document.getElementById("audio7").loop = false ;
    }
}



document.getElementById("so8").onmousedown = playpauseaudio8;

function playpauseaudio8() {
    if (document.getElementById("audio8").paused) {
        document.getElementById("audio8").play();
    } else {
        document.getElementById("audio8").pause();
    }
}

document.getElementById("volum8").value =
    document.getElementById("audio8").volume;

document.getElementById("volum8").oninput = canviavolum8;

function canviavolum8() {
    document.getElementById("audio8").volume =
        document.getElementById("volum8").value;
}
document.getElementById("loop8").onclick = playloop8;

function playloop8() {
    if (document.getElementById("audio8").loop == false) {
        document.getElementById("audio8").loop = true;
    }else{
       document.getElementById("audio8").loop = false ;
    }
}

