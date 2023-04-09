let btn = document.getElementById("rgb");
let rgbCSS = `
animation: colorchange 20s infinite alternate;
-webkit-animation: colorchange 20s infinite alternate;
`

btn.addEventListener('click', function handleClick() {
    const initialText = 'off';
  
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      btn.textContent = 'on';
      document.body.style += rgbCSS;
      document.getElementById("footer").style += rgbCSS;
    } else {
      btn.textContent = initialText;
      document.body.style -= rgbCSS;
      document.getElementById("footer").style -= rgbCSS;
    }
  });