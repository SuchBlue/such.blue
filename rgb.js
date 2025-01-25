let last_clicked = spamTimes = 0;
let btn = document.getElementById("rgb");
let rgbCSS = `
animation: colorchange 20s infinite alternate;
-webkit-animation: colorchange 20s infinite alternate;
`

function addRGB() {
    document.body.style += rgbCSS;
    document.getElementById("footer").style += rgbCSS;
    btn.attributes["data-i18n"].textContent = "rgb.button-on";
}
function removeRGB() {
    document.body.style -= rgbCSS;
    document.getElementById("footer").style -= rgbCSS;
    btn.attributes["data-i18n"].textContent = "rgb.button-off";
}

addRGB();

btn.addEventListener('click', function handleClick() {
    switch (btn.attributes["data-i18n"].textContent) {
      case "rgb.button-on":
        removeRGB();
        break;
      case "rgb.button-off":
        addRGB();
        break;
    }
    
    if (Date.now() - last_clicked < 500) {
      spamTimes += 1;
      if(spamTimes == 1) return;
      let views = document.getElementById("views");
      if(views) {
        let viewsText = parseInt(views.innerText);
        viewsText += 1;
        views.innerText = viewsText;
      }
    }
    last_clicked = Date.now();
  });