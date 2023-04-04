var topImg = "bigguy";
var topCaption = "bigguyCap";
var imgSrc = new Array ("bigguy", "disk", "galaxy", "thing", "spiral", "swirly");
var caption = new Array ("bigguyCap", "diskCap", "galaxyCap", "thingCap", 
"spiralCap", "swirlyCap");

function getImg() {
    var idx = Math.trunc(Math.random() * imgSrc.length);
    return [imgSrc[idx], caption[idx]];
}

function changeImg() {
    var [newImg, newCap] = getImg();
    styleTopImg = document.getElementById(topImg).style;
    styleNewImg = document.getElementById(newImg).style;
    styleTopCap = document.getElementById(topCaption).style;
    styleNewCap = document.getElementById(newCap).style;

    styleTopImg.opacity = "0";
    styleNewImg.opacity = "1";
    styleTopCap.opacity = "0";
    styleNewCap.opacity = "1";
    topImg = newImg;
}  