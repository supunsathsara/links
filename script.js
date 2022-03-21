const text = document.getElementById("typing");
let prog;
let isRewrite = false;
let idx = 20;
let iText = 0;
let isWroteText = true;
let words = ["Savindu Supun Sathsara", "A Web Designer", "A Subtitle Editor" , "A Living Being"];

setInterval(validateStateText, 250);
async function validateStateText() {
  if (iText == words.length) {
    iText = 0;
  }
  if (!isWroteText) {
    if (isRewrite) {
      if (idx > prog.length) idx = 0;
      writeText(0);
    } else {
      if (idx < 0) idx = prog.length;
      delText(prog.length);
    }
  } else {
    prog = words[iText];
    isWroteText = false;
  }
}

function writeText() {
  text.innerText = prog.slice(0, idx) + "|";
  idx++;
  
  if (idx > prog.length) {
    isRewrite = false;
  }
}

function delText() {
  text.innerText = prog.slice(0, idx) + "|";
  idx--;
  
  if (idx <= 0) {
    iText++;
    isRewrite = true;
    isWroteText = true;
  }
}