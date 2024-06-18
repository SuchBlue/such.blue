let last_clicked = spamTimes = 0;
let btn = document.getElementById("rgb");
let rgbCSS = `
animation: colorchange 20s infinite alternate;
-webkit-animation: colorchange 20s infinite alternate;
`

function addRGB() {
    document.body.style += rgbCSS;
    document.getElementById("footer").style += rgbCSS;
}
function removeRGB() {
    document.body.style -= rgbCSS;
    document.getElementById("footer").style -= rgbCSS;
}

addRGB();

btn.addEventListener('click', function handleClick() {
    const initialText = 'on';
  
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      removeRGB();
      btn.textContent = 'off';
    } else {
      addRGB();
      btn.textContent = initialText;
    }
    
    if (Date.now() - last_clicked < 500) {
      spamTimes += 1;
      if(spamTimes == 1) return;
      let views = document.getElementById("views");
      if(views) views.innerText = (parseInt(views.innerText) += 1).toString();
    }
    last_clicked = Date.now();
  });