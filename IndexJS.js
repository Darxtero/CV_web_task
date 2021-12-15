function Model(){
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

document.getElementById("myProgress1").onmouseover = function() {fill1()};
var i = 0;
function fill1(){
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar1");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 25) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
document.getElementById("myProgress2").onmouseover = function() {fill2()};
var i = 0;
function fill2(){
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar2");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 50) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
document.getElementById("myProgress3").onmouseover = function() {fill3()};
var i = 0;
function fill3(){
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar3");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 75) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}


var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}