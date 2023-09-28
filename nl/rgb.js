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
    const initialText = 'aan';
  
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      removeRGB();
      btn.textContent = 'uit';
    } else {
      addRGB();
      btn.textContent = initialText;
    }
  });